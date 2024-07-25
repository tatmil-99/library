const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.displayBook = function () {};

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", (e) => console.log(e));

// listen for click on addBookBtn
// when clicked display a form
// gather values from input fields
// listen for submit
// when book submitted create new book and display it
