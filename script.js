const myLibrary = [];


function Book(title, author, pages, read = false){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary() {
  const book1 = new Book("Carolina", "Seu Jorge", 150);
  const book2 = new Book("Sou 157", "Mano brown", 200);  
  myLibrary.push(book1,book2);
}



// Adiciona card do array myLibrary
function addCard() {
  const containerCards = document.querySelector('.container-card');
  myLibrary.forEach(livro => {
    let card = document.createElement('div');
    card.classList.add('card');
  
    let cardIcons = document.createElement('div');
    cardIcons.classList.add('card-icons');
  
    let iconEdit = document.createElement('img');
    iconEdit.src =  'icons/book-edit.svg';
    iconEdit.classList.add('icon' , 'edit');
    
  
    let iconDelete = document.createElement('img');
    iconDelete.classList.add('icon', 'delete');
    iconDelete.src =  'icons/delete.svg';
  
    let title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = livro.title;
  
    let author = document.createElement('h3');
    author.classList.add('author');
    author.textContent = livro.author;
  
    let cardPages = document.createElement('div');
    cardPages.classList.add('card-pages');
  
    let pages = document.createElement('h3');
    pages.classList.add('pages');
    pages.textContent = `${livro.pages} Pages`;
  
  
    let iconPages = document.createElement('img')
    iconPages.classList.add('icon' , 'read');
  
    if (livro.read == true) {
      iconPages.src = 'icons/progress-check.svg';
    }else{
      iconPages.src = 'icons/progress-close.svg';
    }
      
    cardPages.appendChild(pages);
    cardPages.appendChild(iconPages);
  
    cardIcons.appendChild(iconEdit);
    cardIcons.appendChild(iconDelete);
  
    card.appendChild(cardIcons);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(cardPages);
  
    containerCards.appendChild(card);
  
  });
    
}


addBookToLibrary();
addCard();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".coco");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});






