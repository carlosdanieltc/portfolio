//MENU VARIABLES

const menuButton = document.getElementById('menu-button');
const menuItems = document.getElementById('menu');
const darkModeButton = document.getElementById('dark-mode-button');
const htmlElement = document.querySelector('html');

//ABRE MENU
menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
    menuButton.classList.toggle('text-white');
});

//DARK MODE

// Deshabilitar el modo oscuro al cargar la página
//htmlElement.classList.remove('dark');

darkModeButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
  });