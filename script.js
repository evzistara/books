const addBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".close");
const dialog = document.querySelector("dialog");
const bookCard = document.querySelector(".books");
const form = document.querySelector("form"); 
const readBtn = document.querySelector(".read");


addBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

let library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: false,
  },
];

let booksLocalStorage = JSON.parse(localStorage.getItem('library'))
if(booksLocalStorage){
  library = booksLocalStorage;
  renderBooks();
}



function renderBooks() {
  bookCard.innerHTML = "";
  for (let book of library) {
    bookCard.innerHTML += `
     <div class="card" id="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
        <div class="buttons">
            <button class="btn read">Read</button>
            <button class="btn delete">Delete</button>
        </div>
    </div>`;
  }
}

renderBooks();

form.addEventListener('submit', submitBook);

function submitBook(e){
  e.preventDefault();
  const bookFormData = new FormData(form);
  const book = {
    title: bookFormData.get('bookTitle'),
    author: bookFormData.get('bookAuthor'),
    pages: bookFormData.get('bookPages'),
    read: bookFormData.get('bookRead') === 'on',
  };
  library.push(book);
  localStorage.setItem('library', JSON.stringify(library));
  renderBooks();
  form.reset();
}

bookCard.addEventListener('change', (e)=> {
  console.log(e.target.id);
})


function readBook(){

}