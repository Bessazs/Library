const myLibrary = [];
let ids = 1;

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  addCard();
  myLibrary.pop();
}
//Apagar o card
function clic(id) {
  
  const apagar = document.querySelector('.apagar'+id);
  apagar.remove();
}




// Adiciona card do array myLibrary
function addCard() {
  const containerCards = document.querySelector('.container-card');
  myLibrary.forEach(livro => {
    let card = document.createElement('div');
    card.classList.add('card', "apagar"+ids);
  
    let cardIcons = document.createElement('div');
    cardIcons.classList.add('card-icons');
  
    let iconDelete = document.createElement('img');
    iconDelete.classList.add('icon', 'delete');
    iconDelete.src =  'icons/delete.svg';
    iconDelete.setAttribute('onClick', "clic("+ids+")")
  
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
    iconPages.classList.add('icon' , 'read', 'swich'+ids);
    iconPages.setAttribute('onclick', `swich(${ids})`);
  
    if (livro.read == 'read') {
      iconPages.src = 'icons/progress-check.svg';
    }else if(livro.read == 'reading'){
      iconPages.src = 'icons/progress-close.svg';
    }else{
      iconPages.src = 'icons/basket-plus.svg';
    }
      
    cardPages.appendChild(pages);

    cardIcons.appendChild(iconDelete);
    cardIcons.appendChild(iconPages);

  
    card.appendChild(cardIcons);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(cardPages);
  
    containerCards.appendChild(card);

    ids++;
  
  });
    
}

function swich(id){
  icone = document.querySelector('.swich'+id).src;
  if (icone =='http://127.0.0.1:5500/icons/basket-plus.svg') {
    document.querySelector('.swich'+id).src = 'icons/progress-check.svg';
  } else if (icone =='http://127.0.0.1:5500/icons/progress-close.svg') {
    document.querySelector('.swich'+id).src = 'icons/basket-plus.svg'
  }else{
    document.querySelector('.swich'+id).src = 'icons/progress-close.svg'
  }
  
}


function cleanInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input =>{
    input.value = '';
  });
  const save = document.querySelector('.save');
  save.value = 'Save'
}

// Código relativo ao dialog.

const btnAdd = document.querySelector('.empty');
const dialog = document.querySelector('dialog');
const btnSave = document.querySelector('.save');
const btnCancel = document.querySelector('.cancel');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');


 btnAdd.addEventListener('click',() =>{
   dialog.showModal();
});

btnSave.addEventListener('click', (Event) =>{ 
  if (title.value && pages.value !== "default" && !isNaN(parseInt(pages.value)) && parseInt(pages.value)>0){
    addBookToLibrary(title.value, author.value, pages.value, read.value); 
    Event.preventDefault();
    dialog.close();
    cleanInputs();


  }
})

btnCancel.addEventListener('click',() => {
  dialog.close();
})



// Código referente ao edit e delete








