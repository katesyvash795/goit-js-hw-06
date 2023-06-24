const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const name = evt.currentTarget.value.trim();

  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
}
