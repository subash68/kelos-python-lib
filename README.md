# File Counter

A VS Code extension that scans the current workspace and shows the total
number of files along with each file's name and extension.

## Features

- Recursively scans all files in the open workspace (skipping
  `node_modules`, `.git`, `out`, and `dist`).
- Displays the total file count.
- Lists every file's name and extension in a table.

## Installation

### From source

1. Clone this repository and install dependencies:
   ```bash
   git clone https://github.com/subash68/kelos-python-lib.git
   cd kelos-python-lib
   npm install
   ```
2. Open the folder in VS Code.
3. Press `F5` to launch an Extension Development Host with the extension
   loaded.

### Packaging (optional)

To build an installable `.vsix` package:

```bash
npm install -g @vscode/vsce
npm run compile
vsce package
```

Install the generated `.vsix` file via the Extensions view
(`Install from VSIX...`) or `code --install-extension file-counter-0.0.1.vsix`.

## Usage

1. Open any folder/workspace in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Run **File Counter: Show File Count**.
4. A panel opens showing the total number of files and a table listing
   each file's name and extension.

## Development

- `npm run compile` – compile TypeScript sources in `src/` to `out/`.
- `npm run watch` – compile in watch mode while developing.
