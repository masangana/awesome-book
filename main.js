


const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBookButton = document.getElementById('add-book');
const BookInfo = document.getElementById('book-Info');
let getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));

if (JSON.parse(localStorage.getItem('mesLivres1')) === null) {
    getmylibrary = [];
}else{
    getmylibrary =  JSON.parse(localStorage.getItem('mesLivres1'));
    console.log(getmylibrary)
}

function renderBook() {
    BookInfo.innerHTML = '';
    getmylibrary.forEach((element, index) => {
      BookInfo.innerHTML += `<h4 >${element.title}</h4><br>
      <h4 >${element.author}</h4>
      <button onclick = BL.deleteBook(${index})>Remove</button>
      <hr>`;
    });
  }


class books{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
} 

class storageFun{
    constructor(array){
        this.array = array
    };
    updateStorage = () => {
        localStorage.mesLivres1 = JSON.stringify(this.array);
    };

    addBook = () => {
     const newBook = new books(titleInput.value, authorInput.value);
     this.array.push(newBook);
     this.updateStorage();
     renderBook();
     title.value = '';
     author.value = '';
     console.log(this.array);
   };

   deleteBook = (i) => {
    this.array.splice(i, 1);
    this.updateStorage();
    renderBook();
  };

}

const BL = new storageFun(getmylibrary);
addBookButton.addEventListener('click', () => {
    BL.addBook()
  });
  
  window.addEventListener('load', () => {
    renderBook();
  });