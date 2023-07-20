export const signUp = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const cuentaButton = document.createElement('button');
  const regresoInicioButton = document.createElement('button');
  const textoRegistrate = document.createElement('h3');
  const nombre = document.createElement('input');
  const correoRegistro = document.createElement('input');
  const contrasenaRegistro = document.createElement('input');
  const terminosCheckbox = document.createElement('input');
  const terminosTexto = document.createElement('p');
  const preguntaCuenta = document.createElement('p');

  preguntaCuenta.textContent = '¿Ya tienes una cuenta?';
  terminosTexto.textContent = 'Acepto Términos, Condiciones y política de Privacidad';
  terminosCheckbox.type = 'checkbox';
  textoRegistrate.textContent = '¡Regístrate!';
  nombre.placeholder = 'Nombre y Apellidos';
  correoRegistro.placeholder = 'Correo Electrónico';
  contrasenaRegistro.placeholder = 'Contraseña';
  cuentaButton.textContent = 'Registrarse';
  regresoInicioButton.textContent = 'Inicia Sesión';

  regresoInicioButton.addEventListener('click', () => {
    onNavigate('/');
  });
  cuentaButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  homeDiv.appendChild(textoRegistrate);
  homeDiv.appendChild(nombre);
  homeDiv.appendChild(correoRegistro);
  homeDiv.appendChild(contrasenaRegistro);
  homeDiv.appendChild(terminosCheckbox);
  homeDiv.appendChild(terminosTexto);
  homeDiv.appendChild(cuentaButton);
  homeDiv.appendChild(preguntaCuenta);
  homeDiv.appendChild(regresoInicioButton);
  return homeDiv;
};
