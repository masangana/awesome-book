

let BookInfo = document.getElementById('book-Info');
const awesomeBooks = [];



function addBook(title, author) {
  const newBook = new Object();
  newBook.title = title;
  newBook.author = author;
  console.log(newBook);
  awesomeBooks.push(newBook);
  console.log(awesomeBooks)
}

function removeBook (book,index) {
  awesomeBooks.splice(index, 1);
  console.log(awesomeBooks);
}

function showBooks(bookArray){
  BookInfo.innerHTML='';
  bookArray.forEach((element,index) => {
    BookInfo.innerHTML += `<h4 >${element.title}</h4><br>
    <h4 >${element.author}</h4>
    <button onclick = removeBook(${index})>DEL</button>
    <hr>`;
  });
}

addBook('fdsa00', 'fdsafdas');
addBook('book2', 'fdsafdas');
addBook('book3', 'fdsafdas');

removeBook(0);

showBooks(awesomeBooks);