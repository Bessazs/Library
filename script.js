const myLibrary = [];
let ids = 1;

class Book{

  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }                                     

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
    iconDelete.src =  'icons/lixo.png';
    iconDelete.setAttribute('onClick', "clic("+ids+")")
  
    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = livro.title;
  
    let author = document.createElement('p');
    author.classList.add('author');
    author.textContent = livro.author;
  
    let cardPages = document.createElement('div');
    cardPages.classList.add('card-pages');
  
    let pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = `${livro.pages} Pages`;
  
  
    let iconPages = document.createElement('img')
    iconPages.classList.add('icon' , 'read', 'swich'+ids);
    iconPages.setAttribute('onclick', `swich(${ids})`);
  
    if (livro.read == 'read') {
      iconPages.src = 'icons/carraca.png';
    }else if(livro.read == 'reading'){
      iconPages.src = 'icons/excluir.png';
    }else{
      iconPages.src = 'icons/cesta-de-compras (1).png';
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
  if (icone.indexOf("cesta-de-compras")!=-1) {
    document.querySelector('.swich'+id).src = 'icons/carraca.png';
  } else if (icone.indexOf("excluir")!=-1) {
    document.querySelector('.swich'+id).src = 'icons/cesta-de-compras (1).png'
  }else{
    document.querySelector('.swich'+id).src = 'icons/excluir.png'
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
  cleanInputs();
})








