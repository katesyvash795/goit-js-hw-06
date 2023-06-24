const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('кількість категорій',categoryItems.length);
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
categoryItems.forEach((categoryItem) => {
    const title = categoryItem.querySelector('h2').textContent;
    const subItems = categoryItem.querySelectorAll('li');
    console.log('Заголовок:', title);
    console.log('Кількість елементів:', subItems.length);
  });