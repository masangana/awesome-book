const awesomeBooks = [];

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

const addBookButton = document.getElementById('add-book');

let BookInfo = document.getElementById('book-Info');
const getmylibrary = JSON.parse(localStorage.getItem('saveBooks'));

console.log(getmylibrary)

function addBook(title, author) {
  const newBook = new Object();
  newBook.title = title;
  newBook.author = author;
  getmylibrary.push(newBook);
  console.log(awesomeBooks)
  showBooks(awesomeBooks);

  localStorage.setItem('saveBooks', JSON.stringify(getmylibrary));
  
}


function showBooks(table){
  BookInfo.innerHTML='';
  getmylibrary.forEach((element,index) => {
    BookInfo.innerHTML += `<h4 >${element.title}</h4><br>
    <h4 >${element.author}</h4>
    <button onclick = removeBook(${index})>DEL</button>
    <hr>`;
  });
  //localStorage.setItem('saveBooks', JSON.stringify(getmylibrary));
}

function removeBook(index){
  
  awesomeBooks.splice(index, 1);
  console.log(awesomeBooks);
  showBooks(awesomeBooks);
}

addBookButton.addEventListener('click', () => {
  addBook(titleInput.value, authorInput.value);
});

window.addEventListener('load', () => {
  showBooks(awesomeBooks);
});

