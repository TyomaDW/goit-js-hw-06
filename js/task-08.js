const submitForm = document.querySelector('.login-form');

const onSendForm = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заполните нужные поля!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

submitForm.addEventListener('submit', onSendForm);
