const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInputName = event => {
  event.currentTarget.value
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = 'Anonymous');
};

refs.input.addEventListener('input', onInputName);
