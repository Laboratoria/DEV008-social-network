import { googleLogin, singInEmailPass } from './firebase';

export const signIn = (onNavigate) => {
  // Se crean los elementos de HTML

  const signInDiv = document.createElement('div');
  signInDiv.classList.add('signInDiv');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');
  const imageSignIn = document.createElement('img');
  imageSignIn.classList.add('imageSignIn');
  imageSignIn.src = '../image/imagesignIn.jpg';
  const imageGoogle = document.createElement('img');
  imageGoogle.classList.add('imageGoogle');
  imageGoogle.src = '../image/btn-jpeg.jpg';

  // se crea un select para almacenar el formulario
  const formSignIn = document.createElement('form');
  formSignIn.classList.add('formSignIn');
  const description = document.createElement('h1');
  description.classList.add('description');
  const sentence = document.createElement('p');
  sentence.classList.add('sentence');

  const email = document.createElement('input');
  email.classList.add('email');
  const password = document.createElement('input');
  password.classList.add('password');
  password.setAttribute('type', 'password');
  const signInButton = document.createElement('button');
  signInButton.classList.add('signInButton');
  const googleButton = document.createElement('button');
  googleButton.classList.add('googleButton');
  const dontYouHaveAnAccount = document.createElement('p');
  dontYouHaveAnAccount.classList.add('dontYouHaveAnAccount');
  const signUpButton = document.createElement('button');
  signUpButton.classList.add('signUpButtonInicio');

  // Se inserta el nombre a los elementos creados
  description.textContent =
    '¡Únete a nuestra red de apoyo y reduce el derroche alimentario!';
  sentence.textContent =
    'Somos una comunidad donde encontrarás personas con quien podrás intercambiar alimentos desde canasta básica a totalmente elaborados para evitar el desperdicio.';
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Contraseña';
  signInButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Google';
  dontYouHaveAnAccount.textContent = '¿No tienes una cuenta?';
  signUpButton.textContent = 'Registrate';

  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  signInButton.addEventListener('click', () => {
    singInEmailPass(email.value, password.value)
      .then(() => {
        onNavigate('/wall');
        console.log(singInEmailPass);
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          alert('La contraseña es invalida');
        } else if (error.code === 'auth/user-not-found') {
          alert('El usario es invalido');
        } else {
          alert(error.message);
        }
      });
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin()
      .then((result) => {
        onNavigate('/wall');
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
        console.log(errorMessage);
        console.log(errorCode);
      });
  });
  signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });

  // Se insertan los hijos

  formSignIn.appendChild(email);
  formSignIn.appendChild(password);
  formSignIn.appendChild(signInButton);
  formSignIn.appendChild(googleButton);
  googleButton.appendChild(imageGoogle);
  formSignIn.appendChild(dontYouHaveAnAccount);
  formSignIn.appendChild(signUpButton);
  imgContainer.appendChild(imageSignIn);
  signInDiv.appendChild(imgContainer);
  signInDiv.appendChild(description);
  signInDiv.appendChild(sentence);
  signInDiv.appendChild(formSignIn);
  console.log(formSignIn);
  return signInDiv;
};
