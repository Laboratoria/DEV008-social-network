import { createCountEmailPassword } from './firebase';

export const signUp = (onNavigate) => {
  const singUpDiv = document.createElement('div');
  singUpDiv.classList.add('signUpDiv');
  const signUpButton = document.createElement('button');
  signUpButton.classList.add('signUpButton');
  const backToLogin = document.createElement('button');
  backToLogin.classList.add('backToLogin');
  const signUpText = document.createElement('h3');
  signUpText.classList.add('signUpText');
  const usersName = document.createElement('input');
  usersName.classList.add('usersName');
  const usersEmail = document.createElement('input');
  usersEmail.classList.add('usersEmail');
  const usersPassword = document.createElement('input');
  usersPassword.classList.add('usersPassword');
  const termsCheckbox = document.createElement('input');
  termsCheckbox.classList.add('termsCheckbox');
  const termsText = document.createElement('p');
  termsText.classList.add('termsText');
  const doYouHaveAnAccount = document.createElement('p');
  doYouHaveAnAccount.classList.add('doYouHaveAnAccount');

  doYouHaveAnAccount.textContent = '¿Ya tienes una cuenta?';
  termsText.textContent =
    'Acepto Términos, Condiciones y política de Privacidad';
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
    createCountEmailPassword(usersEmail.value, usersPassword.value)
      .then(() => {
        onNavigate('/wall');
        console.log(usersEmail.value);
        console.log(usersPassword.value);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          alert('Ya existe una cuenta con ese correo');
        } else if (errorCode === 'auth/invalid-email') {
          alert('Ingresa un correo electrónico válido');
        } else if (errorCode === 'auth/weak-password') {
          alert('Ingresa una constraseña de al menos 6 caracteres');
        } else if (errorCode) {
          alert('Algo salió mal');
        }
      });
  });

  singUpDiv.appendChild(signUpText);
  singUpDiv.appendChild(usersName);
  singUpDiv.appendChild(usersEmail);
  singUpDiv.appendChild(usersPassword);
  singUpDiv.appendChild(termsCheckbox);
  singUpDiv.appendChild(termsText);
  singUpDiv.appendChild(signUpButton);
  singUpDiv.appendChild(doYouHaveAnAccount);
  singUpDiv.appendChild(backToLogin);
  return singUpDiv;
};
