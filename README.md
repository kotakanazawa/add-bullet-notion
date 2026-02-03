# Add Bullet Notion

A Chrome extension that provides keyboard shortcuts for quickly inserting bullet points and checkboxes in Notion.

## Features

This extension enhances your Notion experience with convenient keyboard shortcuts:

- **⌘ + Shift + 8**: Insert a hyphen (`- `) to create a bullet point
- **⌘ + Shift + 9**: Insert a checkbox (`[] `) to create a TODO item

## Installation

### Install in Developer Mode

1. Clone or download this repository

   ```bash
   git clone https://github.com/kotakanazawa/add-bullet-notion.git
   ```

2. Open `chrome://extensions/` in Chrome

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked"

5. Select the project folder

## Usage

1. Open [Notion](https://notion.so)

2. Place your cursor in any text input area

3. Use the keyboard shortcuts:
   - Create bullet point: `⌘ + Shift + 8`
   - Create checkbox: `⌘ + Shift + 9`

## Supported Browsers

- Google Chrome
- Chromium-based browsers (Edge, Brave, etc.)

## Development

### File Structure

```
.
├── manifest.json    # Extension manifest file
├── content.js       # Content script injected into Notion pages
└── README.md        # This file
```

### Technical Specifications

- Manifest Version: 3
- Target Sites: `https://*.notion.so/*`
- Required Permissions: None

## License

MIT

## Author

Kota Kanazawa
