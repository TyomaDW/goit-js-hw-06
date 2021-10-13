let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

const valueEl = document.querySelector('#value');

refs.decrementBtn.addEventListener('click', event => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', event => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
