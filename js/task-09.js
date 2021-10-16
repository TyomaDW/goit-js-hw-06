const refs = {
  change: document.querySelector('button.change-color'),
  colors: document.querySelector('span.color'),
};

refs.change.addEventListener('click', onClickChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickChangeColor(event) {
  const color = getRandomHexColor();
  refs.colors.textContent = color;
  document.body.style.backgroundColor = color;
}
