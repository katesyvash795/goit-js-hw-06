const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.dir(categoriesList);
console.log('кількість категорій',categoryItems.length);
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
categoryItems.forEach((categoryItem) => {
    const title = categoryItem.firstElementChild.textContent;
    const subItems = categoryItem.lastElementChild.children;
    console.log('Заголовок:', title);
    console.log('Кількість елементів:', subItems.length);
  });