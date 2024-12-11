document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('grabMode', (data) => {
    const mode = data.grabMode || 'single';
    document.querySelector(`input[value="${mode}"]`).checked = true;
  });

  document.querySelectorAll('input[name="grabMode"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      chrome.storage.sync.set({ grabMode: e.target.value });
    });
  });

  const urlInput = document.getElementById('urlInput');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const copyBtn = document.getElementById('copyBtn');

  chrome.storage.local.get('lastUrlText', (data) => {
    if (data.lastUrlText) {
      urlInput.value = data.lastUrlText;
    }
  });

  urlInput.addEventListener('input', (e) => {
    chrome.storage.local.set({ lastUrlText: e.target.value });
  });

  encodeBtn.addEventListener('click', () => {
    try {
      const text = urlInput.value;
      const encoded = encodeURIComponent(text);
      urlInput.value = encoded;
      chrome.storage.local.set({ lastUrlText: encoded });
    } catch (error) {
      urlInput.value = 'Error encoding URL';
    }
  });

  decodeBtn.addEventListener('click', () => {
    try {
      const text = urlInput.value;
      const decoded = decodeURIComponent(text);
      urlInput.value = decoded;
      chrome.storage.local.set({ lastUrlText: decoded });
    } catch (error) {
      urlInput.value = 'Error decoding URL';
    }
  });

  copyBtn.addEventListener('click', () => {
    urlInput.select();
    document.execCommand('copy');
    
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1000);
  });
}); 