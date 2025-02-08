const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.id = Book.total++;
};

Book.total = 0;

Book.prototype.toggleReadBtn = function () {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

Book.prototype.display = function () {
  const bookCard = `
    <div class="card-wrapper">
      <span aria-hidden="true" class="close-btn del-btn">&times;</span>
      <article data-bookId=${this.id}>
        <h3><cite>${this.title}</cite></h3>
        <span class="author">By: ${this.author}</span>
        <p>Pages: ${this.pages}</p>
        <button class="read-btn">Not read</button>
      </article>
    </div>
    `;

  document
    .querySelector(".card-container")
    .insertAdjacentHTML("beforeend", bookCard);
};

Book.prototype.updateId = function(newId) {
  this.id = newId;
};

const handleDialog = (e) => {
  const dialog = document.querySelector(".form-dialog");
  const targetClassName = e.target.className;

  targetClassName.includes("add-book") ? dialog.showModal() : dialog.close();
};

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", handleDialog);

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", handleDialog);

const submitBookBtn = document.querySelector(".submit-book");
submitBookBtn.addEventListener("click", (e) => {
  const form = document.querySelector(".book-form");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const book = new Book(title, author, pages);
  library.push(book);
  book.display();

  form.reset();
});

// handle read and delete buttons in gui
const cardContainer = document.querySelector(".card-container");
cardContainer.addEventListener("click", (e) => {
  const classes = e.target.classList;
  let node;
  let bookId;
  let book;

  if (classes.contains("read-btn")) {
    node = e.target.parentNode;
    bookId = parseInt(node.dataset.bookid);
    book = library[bookId];
    book.toggleReadBtn();

    e.target.textContent = book.read ? "Read" : "Not read";
  } else if (classes.contains("del-btn")) {
    node = e.target.nextElementSibling;
    node.parentNode.remove();
    bookId = parseInt(node.dataset.bookid);
    
    library.splice(bookId, 1);

    Book.total--;
    
    for (let i = bookId; i < library.length; i++) {
      book = library[i];
      book.id = i;
    }

    const elements = document.querySelectorAll('article[data-bookId]');
    elements.forEach((article, i) => article.dataset.bookid = i);

    console.log(`Total: ${Book.total}`);
    console.log(library)
  }
});