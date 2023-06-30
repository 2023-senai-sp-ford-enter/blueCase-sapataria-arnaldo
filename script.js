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


function animationScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach((e) => {
        if (windowTop >= e.offsetTop) {
            e.classList.add(animationClass);
        } else {
            e.classList.remove('animationClass');
        }
    })
*/

// Função para abrir e fechar o menu

const buttonShoppingCart = document.querySelector('#shopping-cart');

buttonShoppingCart.addEventListener('click', () => {
  const menuShoppingCart = document.querySelector('.shopping-cart');

  menuShoppingCart.classList.toggle('active');
});

//Função para adicionar animação

const heartIcon = document.querySelectorAll('#heart-icon');

heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('active-heart');
});
