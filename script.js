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

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", (e) => {
  const bookForm = document.querySelector(".book-form");
  bookForm.classList.toggle("display-form");

  e.target.textContent = bookForm.classList.contains("display-form")
    ? "Cancel"
    : "New book";
});

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", () => {
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
