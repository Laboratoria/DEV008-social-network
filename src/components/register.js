import { crearUsuario, accesoGoogle } from "../lib/firebase/configuracionFirabase";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../lib/firebase/configuracionFirabase";

export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('container');

  const registerDiv = document.createElement('main');
  registerDiv.classList.add('registerDiv');
  homeDiv.appendChild(registerDiv);

  const conteImagen = document.createElement('aside');
  conteImagen.classList.add('contenedorImagen');
  registerDiv.appendChild(conteImagen);

  const registerImg = document.createElement('img');
  registerImg.src = '../registro.png';
  registerImg.classList.add('loginImagen');
  conteImagen.appendChild(registerImg);

  const contenedorInput = document.createElement('form');
  contenedorInput.classList.add('contenedorFormulario');
  registerDiv.appendChild(contenedorInput);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../logo.png';
  headerLogo.classList.add('headerLogo');
  contenedorInput.appendChild(headerLogo);

  const userInput = document.createElement('input');
  userInput.classList.add('input');
  userInput.id = 'nombre';
  userInput.placeholder = 'Nombre de usuario';
  userInput.required = false;

  const emailInput = document.createElement('input');
  emailInput.classList.add('input');
  emailInput.id = 'mail';
  emailInput.placeholder = 'Correo electrónico';
  emailInput.required = true;

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('input');
  passwordInput.id = 'contraseña1';
  passwordInput.placeholder = 'Crear contraseña (al menos 8 caracteres)';
  passwordInput.required = true;
  passwordInput.minLength = 8;
  passwordInput.type = ('password');

  const aceptregister = document.createElement('button');
  aceptregister.classList.add('button');
  aceptregister.textContent = 'Registrar';

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('button');
  buttonHome.textContent = 'Inicio';

  const links = document.createElement('section');

  const parrafo1 = document.createElement('p');
  parrafo1.textContent = 'Ó registrate con tu cuenta';

  const linkGoogle = document.createElement('div');
  links.appendChild(linkGoogle);

  const buttonGoogle = document.createElement('img');
  buttonGoogle.src = 'https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_1280.png';
  buttonGoogle.classList.add('buttonGoogle');
  buttonGoogle.id = 'google';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  contenedorInput.appendChild(userInput);
  contenedorInput.appendChild(emailInput);
  contenedorInput.appendChild(passwordInput);
  contenedorInput.appendChild(aceptregister);
  links.appendChild(parrafo1);
  contenedorInput.appendChild(links);
  contenedorInput.appendChild(buttonGoogle);
  contenedorInput.appendChild(buttonHome);

  aceptregister.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('mail').value;
    const password = document.getElementById('contraseña1').value;

    crearUsuario(email, password)
      .then((respuesta) => {
        // Signed in
        const user = respuesta.user;
        console.log(user);
        // ...
        alert('Usuario registrado exitosamente');
        onNavigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
        alert(error.message);
      });
  });

  buttonGoogle.addEventListener('click', () => {
    accesoGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert('Usuario registrado exitosamente');
      onNavigate('/login');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(error.message);
    });
  });
  return homeDiv;
};
