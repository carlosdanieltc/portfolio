//MENU VARIABLES

const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const links = document.querySelectorAll('#menu a');

//ABRE MENU

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
});