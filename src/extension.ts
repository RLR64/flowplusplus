//  extension.ts — Flow++ main entry point
import * as vscode from 'vscode';
import { findSuggestion } from './suggestions';

//  Status Bar
let statusBar: vscode.StatusBarItem;

function updateStatusBar(enabled: boolean) {
  statusBar.text = enabled ? '$(sparkle) Flow++' : '$(circle-slash) Flow++';
  statusBar.tooltip = enabled
    ? 'Flow++: Inline suggestions ON (click to toggle)'
    : 'Flow++: Inline suggestions OFF (click to toggle)';
  statusBar.backgroundColor = enabled
    ? undefined
    : new vscode.ThemeColor('statusBarItem.warningBackground');
}

/*  Language resolver
 *  VS Code sometimes reports .h and .hpp files as 'c' regardless of content,
 *  or occasionally as 'cpp' — we resolve by file extension to be sure.
 */

function resolveLanguage(document: vscode.TextDocument): 'c' | 'cpp' {
  const ext = document.fileName.split('.').pop()?.toLowerCase();
  if (ext === 'hpp' || ext === 'hxx' || ext === 'cpp' || ext === 'cxx' || ext === 'cc') {
    return 'cpp';
  }
  if (ext === 'h' || ext === 'c') {
    return 'c';
  }
  //  Fall back to what VS Code reports
  return document.languageId === 'cpp' ? 'cpp' : 'c';
}

//  Inline Completion Provider
class FlowInlineCompletionProvider implements vscode.InlineCompletionItemProvider {

  private lastResult: vscode.InlineCompletionList | undefined = undefined;
  private debounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;
  private pendingResolve: ((result: vscode.InlineCompletionList | undefined) => void) | undefined = undefined;

  provideInlineCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _context: vscode.InlineCompletionContext,
    token: vscode.CancellationToken
  ): Promise<vscode.InlineCompletionList | undefined> {

    const config = vscode.workspace.getConfiguration('flowplusplus');
    if (!config.get<boolean>('enabled', true)) {
      return Promise.resolve(undefined);
    }

    const triggerLen = config.get<number>('triggerLength', 3);
    const delay = config.get<number>('delay', 400);

    //  Grab everything on the current line up to the cursor
    const linePrefix = document.lineAt(position.line).text.slice(0, position.character);

    //  Extract the current "word" — including std:: prefixed tokens and # directives
    const wordMatch = linePrefix.match(/(?:#include\s*<[a-z]*|#[a-z]+|[\w:]+)$/);

    if (!wordMatch || wordMatch[0].length < triggerLen) {
      //  Don't clear lastResult immediately — let it linger so ghost text stays visible
      return Promise.resolve(this.lastResult);
    }

    const word = wordMatch[0];
    const suggestion = findSuggestion(word, resolveLanguage(document));

    if (!suggestion) {
      //  Still return lastResult so ghost text doesn't vanish mid-typing
      return Promise.resolve(this.lastResult);
    }

    //  Cancel any pending debounce
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      if (this.pendingResolve) {
        //  Resolve old promise with last known result
        this.pendingResolve(this.lastResult);
        this.pendingResolve = undefined;
      }
    }

    //  Return a promise that resolves after the debounce delay
    return new Promise((resolve) => {
      this.pendingResolve = resolve;

      this.debounceTimer = setTimeout(() => {
        //  If the request was cancelled while we were waiting, return last result
        if (token.isCancellationRequested) {
          resolve(this.lastResult);
          return;
        }

        const wordStart = position.translate(0, -word.length);
        const replaceRange = new vscode.Range(wordStart, position);

        const item = new vscode.InlineCompletionItem(
          suggestion.completion,
          replaceRange
        );

        const result: vscode.InlineCompletionList = { items: [item] };
        this.lastResult = result; // cache it so it lingers
        this.pendingResolve = undefined;
        resolve(result);
      }, delay);
    });
  }
}

//  Activation
export function activate(context: vscode.ExtensionContext) {

  console.log('Flow++ is active!');

  //  Status bar button
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBar.command = 'flowplusplus.toggle';
  const cfg = vscode.workspace.getConfiguration('flowplusplus');
  updateStatusBar(cfg.get<boolean>('enabled', true));
  statusBar.show();
  context.subscriptions.push(statusBar);

  //  Toggle command
  const toggle = vscode.commands.registerCommand('flowplusplus.toggle', () => {
    const config = vscode.workspace.getConfiguration('flowplusplus');
    const current = config.get<boolean>('enabled', true);
    config.update('enabled', !current, vscode.ConfigurationTarget.Global);
    updateStatusBar(!current);
    vscode.window.showInformationMessage(
      `Flow++: Inline suggestions ${!current ? 'enabled' : 'disabled'}`
    );
  });
  context.subscriptions.push(toggle);

  //  Register the inline provider for C and C++ including header files
  const provider = new FlowInlineCompletionProvider();
  const registration = vscode.languages.registerInlineCompletionItemProvider(
    [
      { language: 'c' },
      { language: 'cpp' },
      { pattern: '**/*.h' },
      { pattern: '**/*.hpp' },
      { pattern: '**/*.hxx' },
    ],
    provider
  );
  context.subscriptions.push(registration);

  //  Notify on config change to update status bar
  const cfgWatcher = vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration('flowplusplus.enabled')) {
      const enabled = vscode.workspace.getConfiguration('flowplusplus').get<boolean>('enabled', true);
      updateStatusBar(enabled);
    }
  });
  context.subscriptions.push(cfgWatcher);
}

export function deactivate() {
  statusBar?.dispose();
}