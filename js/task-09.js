function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColor: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

const onChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = `${getRandomHexColor()}`;

  console.log(getRandomHexColor());
};

refs.changeColor.addEventListener('click', onChangeColor);
