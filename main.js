/* eslint-disable max-classes-per-file */

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBookButton = document.getElementById('add-book');
const BookInfo = document.getElementById('booksContainer');
let getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));

if (JSON.parse(localStorage.getItem('mesLivres1')) === null) {
  getmylibrary = [];
} else {
  getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));
}

function renderBook() {
  BookInfo.innerHTML = '';
  getmylibrary.forEach((element, index) => {
    BookInfo.innerHTML += `<tr>
      <td class="ms-4 fs-5">
        <span class="ms-3">
          "${element.title}" by ${element.author}
        </span>
      </td>
      <td class="d-flex">
        <button class="btn btn-warning fs-5 mx-auto" onclick = BL.deleteBook(${index})>
          Delete
        </button>
      </td>
    </tr>`;
  });
}

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class StorageFun {
  constructor(array) {
    this.array = array;
  }

    updateStorage = () => {
      localStorage.mesLivres1 = JSON.stringify(this.array);
    };

    addBook = () => {
      const newBook = new Books(titleInput.value, authorInput.value);
      this.array.push(newBook);
      this.updateStorage();
      renderBook();
      titleInput.value = '';
      authorInput.value = '';
    };

   deleteBook = (i) => {
     this.array.splice(i, 1);
     this.updateStorage();
     renderBook();
   };
}

const BL = new StorageFun(getmylibrary);
addBookButton.addEventListener('click', () => {
  BL.addBook();
});

window.addEventListener('load', () => {
  renderBook();
});