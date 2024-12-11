function cleanUrl(url) {
  try {
    const urlObj = new URL(url);
    
    let cleanPath = urlObj.pathname;
    if (cleanPath.startsWith('@')) {
      cleanPath = cleanPath.substring(1);
    }
    urlObj.pathname = cleanPath;

    return urlObj.toString();
  } catch (error) {
    console.error('Error cleaning URL:', error);
    return url;
  }
}

function extractUsefulParameters() {
  const params = new URLSearchParams();
  
  const interestingElements = document.querySelectorAll(
    'input[type="text"], input[type="search"], input[type="hidden"], ' +
    'input[type="file"], input[type="email"], input[type="url"], ' +
    'textarea, select, input[type="number"]'
  );

  interestingElements.forEach(element => {
    if (element.name || element.id) {
      const paramName = element.name || element.id;
      params.append(paramName, element.value || 'FUZZ');
    }
  });

  const url = new URL(window.location.href);
  
  const existingParams = new URLSearchParams(url.search);
  for (let [key, value] of existingParams) {
    if (!params.has(key) && !key.includes('token') && !key.includes('csrf')) {
      params.append(key, value || 'FUZZ');
    }
  }

  url.search = params.toString();
  return url.toString();
}

function getAllParameters() {
  return extractUsefulParameters();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "grabParameters") {
    chrome.storage.sync.get('grabMode', (data) => {
      const mode = data.grabMode || 'single';
      const clickedElement = document.activeElement;
      
      if (mode === 'all') {
        const parameters = getAllParameters();
        copyToClipboard(parameters);
      } else {
        const form = findParentForm(clickedElement);
        if (form) {
          const parameters = extractFormParameters(form);
          copyToClipboard(parameters);
        } else {
          const singleParameter = extractSingleElementParameters(clickedElement);
          if (singleParameter) {
            copyToClipboard(singleParameter);
          }
        }
      }
    });
  }
});

function findParentForm(element) {
  let current = element;
  while (current && current.tagName !== 'FORM') {
    current = current.parentElement;
  }
  return current;
}

function extractFormParameters(form) {
  const formData = new FormData(form);
  const params = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    if (!key.includes('token') && !key.includes('csrf')) {
      params.append(key, value || 'FUZZ');
    }
  }

  const baseUrl = form.action || window.location.href;
  const url = new URL(baseUrl);
  url.search = params.toString();
  return url.toString();
}

function extractSingleElementParameters(element) {
  if (!element || (!element.name && !element.id)) return null;

  const key = element.name || element.id;
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  
  params.set(key, element.value || 'FUZZ');
  
  url.search = params.toString();
  return url.toString();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const notification = document.createElement('div');
    notification.textContent = 'params copied to clipboard!';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 999999;
      opacity: 0.9;
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  });
} 