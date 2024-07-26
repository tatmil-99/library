const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.displayBook = function () {};

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", (e) => {
  const newBookForm = document.querySelector(".new-book-form");
  newBookForm.classList.toggle("display-form");

  if (newBookForm.classList.contains("display-form")) {
    e.target.textContent = "Cancel";
  } else {
    e.target.textContent = "New book";
  }
});

// listen for click on addBookBtn
// when clicked display a form
// gather values from input fields
// listen for submit
// when book submitted create new book and display it
