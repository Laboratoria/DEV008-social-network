import './app/signupForm.js'
// Obtener los modales y los botones para abrirlos
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('[data-modal-target]');

// Función para mostrar el modal
function showModal(modal) {
  modal.style.display = 'block';
}

// Función para ocultar el modal
function hideModal(modal) {
  modal.style.display = 'none';
}

// Eventos para mostrar los modales cuando se haga clic en los botones correspondientes
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetModal = document.querySelector(button.dataset.modalTarget);
    showModal(targetModal);
  });
});

// Eventos para ocultar los modales cuando se haga clic en el botón de cerrar o fuera del modal
const closeButtons = document.querySelectorAll('.close');
modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
      hideModal(modal);
    }
  });
});/* Este es el punto de entrada de tu aplicacion
import { changeView } from './view-controler/index.js';

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);*/
