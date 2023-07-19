export const signUp = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const cuentaButton = document.createElement('button');
  const regresoInicioButton = document.createElement('button');

  cuentaButton.textContent = 'Registrarse';
  regresoInicioButton.textContent = 'Iniciar Sesión';

  regresoInicioButton.addEventListener('click',() => {
    onNavigate('/')
  })
  cuentaButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  homeDiv.appendChild(cuentaButton);
  homeDiv.appendChild(regresoInicioButton);
  return homeDiv;
};
