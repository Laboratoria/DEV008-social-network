export const signUp = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signUpButton = document.createElement('button');
  const backToLogin = document.createElement('button');
  const signUpText = document.createElement('h3');
  const usersName = document.createElement('input');
  const usersEmail = document.createElement('input');
  const usersPassword = document.createElement('input');
  const termsCheckbox = document.createElement('input');
  const termsText = document.createElement('p');
  const doYouHaveAnAccount = document.createElement('p');

  doYouHaveAnAccount.textContent = '¿Ya tienes una cuenta?';
  termsText.textContent = 'Acepto Términos, Condiciones y política de Privacidad';
  termsCheckbox.type = 'checkbox';
  signUpText.textContent = '¡Regístrate!';
  usersName.placeholder = 'Nombre y Apellidos';
  usersEmail.placeholder = 'Correo Electrónico';
  usersPassword.placeholder = 'Contraseña';
  signUpButton.textContent = 'Crear cuenta';
  backToLogin.textContent = 'Inicia sesión';

  backToLogin.addEventListener('click', () => {
    onNavigate('/');
  });
  signUpButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  homeDiv.appendChild(signUpText);
  homeDiv.appendChild(usersName);
  homeDiv.appendChild(usersEmail);
  homeDiv.appendChild(usersPassword);
  homeDiv.appendChild(termsCheckbox);
  homeDiv.appendChild(termsText);
  homeDiv.appendChild(signUpButton);
  homeDiv.appendChild(doYouHaveAnAccount);
  homeDiv.appendChild(backToLogin);
  return homeDiv;
};
