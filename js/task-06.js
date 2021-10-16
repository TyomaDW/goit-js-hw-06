const refs = { input: document.querySelector('#validation-input') };

const valueLength = parseInt(refs.input.dataset.length);

const onInputInBlur = event => {
  event.currentTarget.value.length !== valueLength
    ? event.currentTarget.classList.add('invalid') &
      event.currentTarget.classList.remove('valid')
    : event.currentTarget.classList.add('valid') &
      event.currentTarget.classList.remove('invalid');
};

refs.input.addEventListener('blur', onInputInBlur);
