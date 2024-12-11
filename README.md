<div align="center">
  <img src="https://github.com/user-attachments/assets/035eb147-69f7-4710-85f3-22ec4e0f9420" alt="logo" /> 
</div>

<h1 align="center"><a href="https://github.com/1hehaq/greb"> Greb </a></h1>

<div align="center">

<p> 
  
  **_A Chrome extension for easily capturing and manipulating form parameters, URL parameters, and form data!_**

</p>

  <div>
    
  <a href="#installation">`installation`</a>
  <a href="#setup">`setup`</a>
  <a href="#features">`features`</a>
  <a href="#using">`usage`</a>
  <a href="#license">`license`</a>
<!--  <a href="#donate">`donate`</a> -->
  
  </div>

</div>


<br>
<br>


## `Features`

- [x] Grab parameters from any form or input field
- [x] Switch between single parameter and all parameters mode
- [x] Built in URL encoder/decoder
- [x] Quick copy to clipboard functionality
- [x] Secure parameter handling (excludes sensitive tokens)
- [x] Right click context menu integration
- [x] Privacy focused - no data collection or tracking

<br>
<br>


## `Installation`

#### ⇨ From Chrome Web Store
  **_`(Coming soon)`_**

#### ⇨ From Node package - [**Greb**](https://github.com/users/1hehaq/packages/npm/package/greb)

- ```bash
   npm install @1hehaq/greb@1.0.0 # Install from the command line
   ```
  
  **`OR`**
  
- ```json
   "@1hehaq/greb": "1.0.0" // Install via package.json (remove this comment while installation)
   ```

**After npm installation:**
1. Navigate to the extension directory:
   ```bash
   cd node_modules/@1hehaq/greb
   ```

2. The extension files are now in this directory. Follow the "Manual Setup" instructions below to load it in Chrome.

#### ⇨ Manual Installation

- **Download the Extension**
   ```bash
   # Clone the repository
   git clone https://github.com/1hehaq/greb.git
   ```
   ```bash
   # Navigate to the project directory
   cd greb
   ```
   ```bash
   # Install dependencies
   npm install
   ```


<br>
<br>


## `Setup`

#### ⇨ Loading in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the directory containing the extension files:
   - If installed via npm: Select the `node_modules/@1hehaq/greb` directory
   - If cloned from repository: Select the `greb` directory
5. Pin the extension (optional)

#### ⇨ Verify Installation
- Look for the Greb icon in your Chrome toolbar
- Right-click on any form field to see the "Grab Parameters" option

<br>
<br>

## `Using`

#### ⇨ Basic Usage

- **Single Parameter Mode**
  - Right-click on any input field
  - Select "Grab Parameters" from the context menu
  - The parameter will be copied to your clipboard

- **All Parameters Mode**
  - Click the Greb icon in your toolbar
  - Switch to "All Parameters Mode"
  - Right-click on any form
  - Select "Grab Parameters"
  - All form parameters will be copied

#### ⇨ URL Encoder/Decoder

- Click the Greb icon in your toolbar
- Paste your URL or parameters in the text area
- Use the buttons to:
  ```
  Encode → Convert special characters to URL-safe format
  Decode → Convert encoded URLs back to readable format
  Copy   → Quick copy to clipboard
  ```

#### ⇨ Parameter Modes

- **Single Parameter Mode**
  ```
  ├── Captures only the selected input field
  └── Ideal for testing individual parameters
  ```

- **All Parameters Mode**
  ```
  ├── Captures all parameters from the current form/page
  └── Perfect for comprehensive testing
  ```


<br>
<br>


## `Security`

#### ⇨ Privacy

```
├── No sensitive data collection (tokens, CSRF)
├── All operations performed locally
├── Zero external network requests
└── Minimal data storage (user preferences only)
```

<br>
<br>

## `License`

This project is licensed under the Mozilla Public License Version 2.0 - see the [`LICENSE`](https://github.com/1hehaq/greb/blob/main/LICENSE) file for details.

<br>
<br>

<div align="center">
  <sub>
  
  🪐 Built by [`1hehaq`](https://x.com/1hehaq)
  
  </sub>
  <sub>
  
  Follow me on [`𝕏`](https://x.com/1hehaq)
  
  </sub>
</div> 
