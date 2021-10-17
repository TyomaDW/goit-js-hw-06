const refs = {
  input: document.querySelector('input[type="number"]'),
  boxes: document.querySelector('div#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
};

refs.createBtn.addEventListener('click', onClickAddBoxes);
refs.destroyBtn.addEventListener('click', onClickDestroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();

    size += 10;
    boxes.push(box);
  }
  refs.boxes.append(...boxes);
}

function onClickAddBoxes(event) {
  const amount = refs.input.value;
  createBoxes(amount);
}
function onClickDestroyBoxes(event) {
  const amount = refs.input.value;
  for (let i = 1; i <= amount; i += 1) {
    if (refs.boxes.querySelector('div')) {
      refs.boxes.querySelector('div').remove();
    }
  }
}
