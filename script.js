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




