const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.id = Book.total++;
}

Book.total = 0;

Book.prototype.toggleReadBtn = function (e) {
  const readBtn = e.target;
  const classes = readBtn.classList;
  const read = classes.toggle("read");

  if (read) {
    this.read = true;
    readBtn.textContent = "Read";
  } else {
    this.read = false;
    readBtn.textContent = "Not read";
  }
};

Book.prototype.display = function () {
  const bookCard = `
    <div class="card-wrapper" data-book-id="${this.id}">
      <article>
        <h3><cite>${this.title}</cite></h3>
        <span class="author">By: ${this.author}</span>
        <p>Pages: ${this.pages}</p>
        <button class="read-btn-${this.id}">Not read</button>
      </article>
    </div>
    `;

  document
    .querySelector(".card-container")
    .insertAdjacentHTML("beforeend", bookCard);

  const readBtn = document.querySelector(`.read-btn-${this.id}`);
  readBtn.addEventListener("click", (e) => this.toggleReadBtn(e));
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
