const navbar = document.getElementById('navbar');
const btnTop = document.getElementById('btn-top');

function navbarElement (posicao) {
    if (posicao > navbar.offsetTop && posicao > btnTop.offsetTop) {
        navbar.classList.add('animation');
        btnTop.classList.add('btn')
    } else {
        navbar.classList.remove('animation');
        btnTop.classList.remove('btn')
    }
}

document.addEventListener('scroll', () => {
    navbarElement(window.scrollY);
});


// Função para alterar o tema

const rootElement = document.documentElement;

const currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : 'white';

rootElement.setAttribute('data-theme', currentTheme);

document.querySelector('#theme-btn').addEventListener('click', () => {

    if (rootElement.getAttribute('data-theme') === 'white') {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        rootElement.setAttribute('data-theme', 'white');
        localStorage.setItem('data-theme', 'white');
    }
});



