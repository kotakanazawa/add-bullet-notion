// Command + Shift + 8 でハイフンを入力
function insertBulletPoint(event, activeElement) {
  // githubの場合は処理をやめる
  if (window.location.hostname === "github.com") {
    return
  }

  if (event.metaKey && event.shiftKey && event.key === "8") {
    // contentEditableの場合
    if (activeElement.isContentEditable) {
      document.execCommand("insertText", false, "- ")
    }
  }
}

// Command + Shift + 9 でTODOを入力
function insertTodo(event, activeElement) {
  if (event.metaKey && event.shiftKey && event.key === "9") {
    // contentEditableの場合
    if (activeElement.isContentEditable) {
      document.execCommand("insertText", false, "[] ")
    }
    // input/textareaの場合
    else {
      const start = activeElement.selectionStart
      const end = activeElement.selectionEnd
      const value = activeElement.value

      // カーソル位置に`- [ ] `を挿入. Github用
      activeElement.value =
        value.substring(0, start) + "- [ ] " + value.substring(end)

      // カーソル位置を更新
      activeElement.selectionStart = activeElement.selectionEnd = start + 6

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

  // Command + Shift + 8 または Command + Shift + 9 の場合のみ処理
  if (event.metaKey && event.shiftKey) {
    if (event.key === "8") {
      event.preventDefault()
      insertBulletPoint(event, activeElement)
    } else if (event.key === "9") {
      event.preventDefault()
      insertTodo(event, activeElement)
    }
  }
})
