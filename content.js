// Command + Shift + 8 でハイフンを入力
function insertBulletPoint(activeElement) {
  // contentEditableの場合(Notion用)
  if (activeElement.isContentEditable) {
    document.execCommand("insertText", false, "- ")
  }
}

// Command + Shift + 9 でTODOを入力
function insertTodo(activeElement) {
  // contentEditableの場合(Notion用)
  if (activeElement.isContentEditable) {
    document.execCommand("insertText", false, "[] ")
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
      insertBulletPoint(activeElement)
    } else if (event.key === "9") {
      event.preventDefault()
      insertTodo(activeElement)
    }
  }
})
