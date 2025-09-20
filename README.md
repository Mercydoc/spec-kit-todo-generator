# Spec Kit ToDo Generator

This VS Code extension generates a folder and ToDo file structure for Spec-Driven Development projects.

## Features

- Creates standard folders: `specs`, `docs`, `templates`, `ai-agents`, `constitutional-principles`, `tasks`
- Generates ToDo markdown files in each folder with customizable checklists
- Command: `Create Spec Kit ToDo Structure`

## Installation

### From GitHub Repository

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/spec-kit-todo-generator.git
   cd spec-kit-todo-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Package the extension (optional):
   ```bash
   npm install -g vsce
   vsce package
   ```

4. Install in VS Code:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Click "..." → "Install from VSIX..."
   - Select the generated `.vsix` file

### From VS Code Marketplace (Coming Soon)

Search for "Spec Kit ToDo Generator" in the VS Code Extensions marketplace.

## Usage

1. Open a workspace/folder in VS Code
2. Right-click in the Explorer and select **Create Spec Kit ToDo Structure**
3. All folders and ToDo files will be created automatically

## Customization
- Edit the template functions in `extension.js` to change ToDo content.
- Add more ToDo categories or folders as needed.

## Requirements
- VS Code 1.60.0 or higher

## Development
- Run `npm install` to install dependencies.
- Package with `vsce package` if needed.

---

© 2025 Spec Kit Contributors
