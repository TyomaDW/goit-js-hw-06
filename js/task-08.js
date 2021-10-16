const refs = {
  form: document.querySelector('form.login-form'),
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
};

const onSendForm = event => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email,
    password,
  };

  if (!password && !email) {
    alert('Заполните нужные поля!');
  } else console.log(formData);
  refs.form.reset();
};

refs.form.addEventListener('submit', onSendForm);
