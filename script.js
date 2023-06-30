//Função para o menu acompanhar o rolamento da página 

const navbar = document.getElementById('navbar');
const btnTop = document.getElementById('btn-top');

function navbarElement(posicao) {
  if (posicao > navbar.offsetTop && posicao > btnTop.offsetTop) {
    navbar.classList.add('animation');
    btnTop.classList.add('btn')
  } else {
    navbar.classList.remove('animation');
    btnTop.classList.remove('btn');
  }
}

document.addEventListener('scroll', () => {
  navbarElement(window.scrollY);
});

/* Função para alterar o tema
    const btnTema = document.querySelector('#theme-btn');

    const currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : '';
    const rootElement = document.documentElement;
    rootElement.setAttribute('data-theme', rootElement)
*/

// Função para abrir e fechar o menu

const buttonShoppingCart = document.querySelector('#shopping-cart');

buttonShoppingCart.addEventListener('click', () => {
  const menuShoppingCart = document.querySelector('.shopping-cart');

  menuShoppingCart.classList.toggle('active');
});

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');

  navbar.classList.toggle('active-menu');
  menuBtn.classList.toggle('active-menu');
});

//Função para adicionar animação

const heartIcon = document.querySelectorAll('#heart-icon');

heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('active-heart');
});
