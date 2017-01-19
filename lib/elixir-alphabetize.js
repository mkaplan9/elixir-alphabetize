'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'elixir-alphabetize:beautify': () => this.beautify()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  beautify() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      all_text = editor.getText().split('\n')
      any_found = false
      start = 0
      end = 0
      for (var i = 0, len = all_text.length; i < len; i++) {
        line = all_text[i]
        if (!any_found) {
          if (line.includes("alias") || line.includes("require") || line.includes("use") || line.includes("import")) {
            start = i
            any_found = true
          }
        } else {
          if (!line.includes("alias") && !line.includes("require") && !line.includes("use") && !line.includes("import")) {
            end = i
            break
          }
        }
      }

      relevant_lines = all_text.slice(start, end).sort()
      Array.prototype.splice.apply(all_text, [start, relevant_lines.length].concat(relevant_lines))
      editor.setText(all_text.join('\n'))
    }
  }
};
