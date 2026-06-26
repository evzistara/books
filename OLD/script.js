document.addEventListener('DOMContentLoaded', () => {
    displayBooks();

    const dialog = document.querySelector('dialog');
    const buttonAdd = document.querySelector('.add');
    const buttonClose = document.querySelector('.close');
    const formSubmit = document.querySelector('form');
    const bookContainer = document.querySelector('.books');

    buttonAdd.addEventListener('click', () => { 
        dialog.showModal(); 
    });

    buttonClose.addEventListener('click', () => { 
        dialog.close(); 
    });
    
    formSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();

    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    const bookPages = document.querySelector('#book-pages').value;
    const bookRead = document.querySelector('#book-read').checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    displayBooks();

    formSubmit.reset();
    dialog.close();
    });
});

const myLibrary = [{
    title: "How to Adult",
    author: "Stephen Wildish",
    pages: 182,
    read: true
}, {
    title:"A Court of Silver Flames",
    author: "Sarah J. Maas",
    pages: 768,
    read: true
}];

function Book (title, author, pages, read){
    this.id=crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;  
    }
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);


}

function displayBooks(){
    const bookContainer = document.querySelector('.books');
    bookContainer.innerHTML = ''; 

    myLibrary.forEach(book => {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.dataset.id = book.id;
        
        const heading = document.createElement('h3');
        heading.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement('p');
        read.textContent = `Book read: ${book.read}`;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttons');

        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('btn', 'remove');
        buttonRemove.textContent = 'Remove';

        const buttonRead = document.createElement('button');
        buttonRead.classList.add('btn', 'read');
        buttonRead.textContent = 'Read';

        buttonContainer.appendChild(buttonRemove);
        buttonContainer.appendChild(buttonRead);
        
        newCard.appendChild(heading);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(read);
        newCard.appendChild(buttonContainer);

        bookContainer.appendChild(newCard);

        buttonRead.addEventListener('click', () => {
            book.toggleRead();
            displayBooks();
        });


        buttonRemove.addEventListener('click', () => {
            removeBook(book.id);
        });
    });
}

function removeBook(bookId){
        const bookIndex = myLibrary.findIndex(book => book.id === bookId);
        myLibrary.splice(bookIndex, 1);
        displayBooks();
}
