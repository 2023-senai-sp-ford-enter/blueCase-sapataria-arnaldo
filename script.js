
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
}

if(target.length) {
    window.addEventListener('scroll', () => {
        animationScroll();
    })
}