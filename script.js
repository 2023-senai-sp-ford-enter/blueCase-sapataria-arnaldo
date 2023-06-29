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


    btnTema.addEventListener('click', () => {
        if (rootElement.setAttribute('data-theme') === 'white') {
            rootElement.setAttribute('data-theme', 'black');
            localStorage.setItem('data-theme', 'black');
        } else {
            rootElement.setAttribute('data-theme', 'white');
            localStorage.setItem('data-theme', 'white');
        }
    })
*/

// Função para abrir e fechar o menu

const buttonShoppingCart = document.querySelector('#shopping-cart');

buttonShoppingCart.addEventListener('click', () => {
  const menuShoppingCart = document.querySelector('.shopping-cart');

  menuShoppingCart.classList.toggle('active');
});

//Função para adicionar uma animações

const heartIcon = document.querySelector('#heart-icon');

heartIcon.addEventListener('click', () => {
  heartIcon.classList.add('active-heart');
});
