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


