const navbar = document.getElementById('navbar');
const btnTop = document.getElementById('btn-top');

<<<<<<< HEAD
const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';

function animationScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach((e) => {
        if (windowTop >= e.offsetTop) {
            e.classList.add(animationClass);
        } else {
            e.classList.remove(animationClass);
        }
    })
=======
function navbarElement (posicao) {
    if (posicao > navbar.offsetTop && posicao > btnTop.offsetTop) {
        navbar.classList.add('animation');
        btnTop.classList.add('btn')
    } else {
        navbar.classList.remove('animation');
        btnTop.classList.remove('btn')
    }
>>>>>>> main
}

document.addEventListener('scroll', () => {
    navbarElement(window.scrollY);
});




