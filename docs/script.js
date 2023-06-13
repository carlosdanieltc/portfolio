//MENU VARIABLES

const menuButton = document.getElementById('menu-button');
const menuItems = document.getElementById('menu-list');
const darkModeButton = document.getElementById('dark-mode-button');
const htmlElement = document.querySelector('html');

//ABRE MENU
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  menuButton.classList.toggle('text-white');
});

//DARK MODE
darkModeButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
});

// Función para verificar el modo noche y actualizar la clase 'dark'
function checkDarkMode(event) {
  if (event.matches) {
    // Agregar la clase 'dark' al elemento <html>
    htmlElement.classList.add('dark');
  } else {
    // Si no está en modo noche, asegúrate de que la clase 'dark' no esté presente
    htmlElement.classList.remove('dark');
  }
}

// Verificar el modo noche al cargar la página
checkDarkMode(window.matchMedia('(prefers-color-scheme: dark)'));

// Escuchar cambios en el modo noche
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDarkMode);