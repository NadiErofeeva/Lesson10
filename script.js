'use strict';

const bookList = document.querySelectorAll('.book');
console.log(bookList);

bookList[0].before(bookList[1]);
bookList[5].after(bookList[2]);
bookList[4].after(bookList[3]);

document.querySelector('body').style.backgroundImage = "url(./image/adv.jpg)";

bookList[4].querySelector('h2 a').innerText = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const book2 = bookList[0];
const book2List = book2.querySelector('ul');
const book2Items = book2List.querySelectorAll('li');

book2Items[3].after(book2Items[6]);
book2Items[6].after(book2Items[8]);
book2Items[9].after(book2Items[2]);

const book5 = bookList[5];
const book5List = book5.querySelector('ul');
const book5Items = book5List.querySelectorAll('li');

book5Items[1].after(book5Items[9]);
book5Items[5].after(book5Items[2]);
book5Items[7].after(book5Items[5]);


const newElement = document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';
bookList[2].querySelector('ul').append(newElement);
