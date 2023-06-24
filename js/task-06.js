const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

input.addEventListener('blur', handleBlur);

function handleBlur(evt) {
  const value = evt.currentTarget.value;
  input.classList.remove('valid', 'invalid');

  if (Number(length) === value.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}


