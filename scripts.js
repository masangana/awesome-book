
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

const addBookButton = document.getElementById('add-book');

const BookInfo = document.getElementById('book-Info');
let getmylibrary = JSON.parse(localStorage.getItem('saveBooks'));

if (JSON.parse(localStorage.getItem('saveBooks')) === null) {
  getmylibrary = [];
}

function showBooks() {
  BookInfo.innerHTML = '';
  getmylibrary.forEach((element, index) => {
    BookInfo.innerHTML += `<h4 >${element.title}</h4><br>
    <h4 >${element.author}</h4>
    <button onclick = removeBook(${index})>Remove</button>
    <hr>`;
  });
}

function addBook(title, author) {
  const newBook = {};
  newBook.title = title;
  newBook.author = author;
  getmylibrary.push(newBook);
  showBooks();
  titleInput.value = '';
  authorInput.value = '';
  localStorage.setItem('saveBooks', JSON.stringify(getmylibrary));
}

function removeBook(index) {
  getmylibrary.splice(index, 1);
  showBooks();
  localStorage.setItem('saveBooks', JSON.stringify(getmylibrary));
}

addBookButton.addEventListener('click', () => {
  addBook(titleInput.value, authorInput.value);
});

window.addEventListener('load', () => {
  showBooks();
});
