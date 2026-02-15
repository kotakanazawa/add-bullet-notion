// カーソルがどこにあっても行頭にテキストを挿入し、Notionのブロック変換を発火させる
function insertAtLineStart(activeElement, prefix) {
  if (!activeElement.isContentEditable) return

  const selection = window.getSelection()
  if (!selection.rangeCount) return

  // カーソルを行頭に移動
  selection.modify("move", "backward", "lineboundary")

  // プレフィックス（"-" や "[]"）を挿入
  document.execCommand("insertText", false, prefix)

  // スペースを別途挿入してNotionのブロック変換を発火させる
  document.execCommand("insertText", false, " ")

  // Notionの変換処理を待ってからカーソルを文末に移動
  setTimeout(() => {
    const selection = window.getSelection()
    selection.modify("move", "forward", "lineboundary")
  }, 0)
}

// Command + Shift + 8 でバレットポイントを挿入
function insertBulletPoint(activeElement) {
  insertAtLineStart(activeElement, "-")
}

// Command + Shift + 9 でTODOを挿入
function insertTodo(activeElement) {
  insertAtLineStart(activeElement, "[]")
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
