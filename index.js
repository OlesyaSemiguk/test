const container = document.querySelector('.container')

container.onclick = function (event) {
  let target = event.target.closest('li')
  let background = event.target.closest('.container')
  // клик по картинке
  if (!target && background) {
    deleteAllSelect(background)
    return
  }
  select(target)
}
function select(li) {
  li.classList.toggle('active')
}
function deleteAllSelect(background) {
  const buttons = background.querySelectorAll('.active')
  buttons.forEach((button) => button.classList.remove('active'))
}
