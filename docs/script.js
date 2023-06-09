//MENU VARIABLES

const menuButton = document.querySelector('#menu-button');
const darkModeButton = document.querySelector('#dark-mode-button');
const html = document.querySelector('html');
const menuItems = document.querySelector('#menu');
const links = document.querySelectorAll('#menu a');

//ABRE MENU

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
    menuButton.classList.toggle('text-white');
});

//DARK MODE
darkModeButton.addEventListener('click', () => {
    html.classList.toggle('dark');
});