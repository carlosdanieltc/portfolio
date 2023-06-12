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

// Detectar si el dispositivo está en modo noche
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Agregar la clase 'dark' al elemento <html>
    htmlElement.classList.add('dark');
  } else {
    // Si no está en modo noche, asegúrate de que la clase 'dark' no esté presente
    htmlElement.classList.remove('dark');
  }