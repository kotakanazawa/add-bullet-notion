// Command + Shift + 8 でハイフンを入力
function insertBulletPoint(event, activeElement) {
  if (event.metaKey && event.shiftKey && event.key === "8") {
    // contentEditableの場合
    if (activeElement.isContentEditable) {
      document.execCommand("insertText", false, "- ")
    }
    // input/textareaの場合
    else {
      const start = activeElement.selectionStart
      const end = activeElement.selectionEnd
      const value = activeElement.value

      // カーソル位置にハイフン + スペースを挿入
      activeElement.value =
        value.substring(0, start) + "- " + value.substring(end)

      // カーソル位置を更新
      activeElement.selectionStart = activeElement.selectionEnd = start + 2

      // inputイベントを発火（Reactなどのフレームワーク対応）
      activeElement.dispatchEvent(new Event("input", { bubbles: true }))
    }
  }
}

document.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement
  const isTextInput =
    activeElement.tagName === "INPUT" ||
    activeElement.tagName === "TEXTAREA" ||
    activeElement.isContentEditable

  // テキスト入力要素でない場合は早期リターン
  if (!isTextInput) return

  event.preventDefault()
  insertBulletPoint(event, activeElement)
})
