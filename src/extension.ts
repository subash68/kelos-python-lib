import * as path from 'path';
import * as vscode from 'vscode';

const EXCLUDE_GLOB = '**/{node_modules,.git,out,dist}/**';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('fileCounter.showFileCount', async () => {
    const files = await vscode.workspace.findFiles('**/*', EXCLUDE_GLOB);

    const panel = vscode.window.createWebviewPanel(
      'fileCounter',
      'File Counter',
      vscode.ViewColumn.One,
      {}
    );
    panel.webview.html = getWebviewContent(files);
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(files: vscode.Uri[]): string {
  const rows = files
    .map((file) => {
      const name = path.basename(file.fsPath);
      const ext = path.extname(file.fsPath) || '(no extension)';
      return `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(ext)}</td></tr>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: var(--vscode-font-family, sans-serif); padding: 1rem; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid var(--vscode-panel-border, #ccc); padding: 4px 8px; text-align: left; }
  th { background: var(--vscode-editor-inactiveSelectionBackground, #f0f0f0); }
</style>
</head>
<body>
<h2>Total files: ${files.length}</h2>
<table>
<thead><tr><th>File Name</th><th>Extension</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function deactivate() {}
