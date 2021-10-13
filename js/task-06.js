const refs = { input: document.querySelector('#validation-input') };

const onInputInBlur = event => {
  event.currentTarget.value.length === 6
    ? (refs.input.className = 'valid')
    : (refs.input.className = 'invalid');
};

refs.input.addEventListener('blur', onInputInBlur);
