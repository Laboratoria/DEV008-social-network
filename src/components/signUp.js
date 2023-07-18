export const signUp = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const cuentaButton = document.createElement('button');
  const regresoInicioButton = document.createElement('button');

  cuentaButton.textContent = 'Crear Cuenta';
  regresoInicioButton.textContent = 'Regresar al inicio';

  regresoInicioButton.addEventListener('click',() => {
    onNavigate('/')
  })

  homeDiv.appendChild(cuentaButton);
  homeDiv.appendChild(regresoInicioButton);
  return homeDiv;
};
