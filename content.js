// Command + Shift + 8 でハイフンを入力
document.addEventListener('keydown', (event) => {
  // Command + Shift + 8 を検出
  if (event.metaKey && event.shiftKey && event.key === '8') {
    // テキスト入力可能な要素にフォーカスしているか確認
    const activeElement = document.activeElement;
    const isTextInput =
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.isContentEditable;

    if (isTextInput) {
      event.preventDefault();

      // contentEditableの場合
      if (activeElement.isContentEditable) {
        document.execCommand('insertText', false, '- ');
      }
      // input/textareaの場合
      else {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        const value = activeElement.value;

        // カーソル位置にハイフン + スペースを挿入
        activeElement.value = value.substring(0, start) + '- ' + value.substring(end);

        // カーソル位置を更新
        activeElement.selectionStart = activeElement.selectionEnd = start + 2;

        // inputイベントを発火（Reactなどのフレームワーク対応）
        activeElement.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }
});
