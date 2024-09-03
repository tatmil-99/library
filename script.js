const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = Book.total++;
}

Book.total = 0;

Book.prototype.displayBook = function () {
  const bookCard = `
    <div class="card-wrapper">
      <article>
        <h3><cite>${this.title}</cite></h3>
        <span class="author">By: ${this.author}</span>
        <p>Pages: ${this.pages}</p>
      </article>
    </div>
    `;

  document.querySelector(".card-container").innerHTML += bookCard;
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
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  book.displayBook();

  library.push(book);

  form.reset();
});
