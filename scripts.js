const awesomeBooks = [];

function addBook(title, author) {
  const newBook = new Object();
  newBook.title = title;
  newBook.author = author;
  console.log(newBook);
  awesomeBooks.push(newBook);
  console.log(awesomeBooks)
}

addBook('fdsa00', 'fdsafdas');

function removeBook (title) {
  remove = awesomeBooks.filter(title);
}
