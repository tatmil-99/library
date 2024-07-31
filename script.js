const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = Book.total++;
}

Book.total = 0;

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

const handleResetFormBtn = () => {
  const resetFormBtn = document.querySelector(".reset-btn");

  resetFormBtn.style.display = "inline";
  resetFormBtn.onclick = function () {
    this.style.display = "none";
  };
};

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  console.log(book.id);
  console.log(Book.total);
  library.push(book);

  handleResetFormBtn();
});
