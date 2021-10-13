const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const onTargetChangeSize = event =>
  (refs.text.style.fontSize = event.currentTarget.value + 'px');

refs.input.addEventListener('input', onTargetChangeSize);
