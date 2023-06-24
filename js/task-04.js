
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueElem = document.getElementById('value');
let counterValue = 0;
const incrementCounter = () => {
  counterValue+=1;
  counterValueElem.textContent = counterValue;
};
const decrementCounter = () => {
  counterValue-=1;
  counterValueElem.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);
