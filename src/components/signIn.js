export const signIn = () => {
  const homeDiv = document.createElement('div');
  const signUpButton = document.createElement('button');
  const signInButton = document.createElement('button');

  signUpButton.textContent = 'Registrate';
  signInButton.textContent = 'Inicia Sesión';

  homeDiv.appendChild(signUpButton);
  homeDiv.appendChild(signInButton);
  return homeDiv;
};
