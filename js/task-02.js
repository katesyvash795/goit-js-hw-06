const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item = document.querySelector('ul#ingredients');
ingredients.forEach((ingredient) => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  item.appendChild(newIngredient);
});