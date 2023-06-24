const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    const message = 'Please fill in all fields';
    alert(message);
  } else {
    const data = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(data);
    formLogin.reset();
  }
}

