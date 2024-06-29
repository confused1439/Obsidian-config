document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        highlightText();
    }
});

function wrapSelectionWithTag(tagName, style) {
    const editor = document.querySelector('.CodeMirror').CodeMirror;
    const selection = editor.getSelection();
    const selectedText = editor.getSelections()[0];
    const wrappedText = `<${tagName} style="${style}">${selectedText}</${tagName}>`;

    editor.replaceSelections([wrappedText]);

    const cursorPos = editor.getCursor();
    editor.setCursor(cursorPos.line, cursorPos.ch + wrappedText.length);
}

function highlightText() {
    wrapSelectionWithTag('mark', 'color: black; background-color: cyan');
}

