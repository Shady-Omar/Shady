let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".nav-menu");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    nav.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    nav.classList.add('hide');
});