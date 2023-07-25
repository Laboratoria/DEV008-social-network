//import { crearUsuario } from "../lib/firebase/configuracionFirabase";
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
  userInput.id= 'Nombre';
  userInput.placeholder = 'Nombre de usuario';
  userInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.classList.add('input');
  emailInput.id= 'E-mail';
  emailInput.placeholder = 'E-mail';
  emailInput.required = true;

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('input');
  passwordInput.id= 'Contraseña1';
  passwordInput.placeholder = 'Escribe tu contraseña (al menos 8 caracteres)';
  passwordInput.required = true;
  passwordInput.minLength = 8;

  /*const password2Input = document.createElement('input');
  password2Input.classList.add('input');
  password2Input.id= 'verificacion-contraseña';
  password2Input.placeholder = 'Repite la contraseña';
  password2Input.required = true;
  password2Input.minLength = 8;*/

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

  buttonHome.addEventListener('click', () => onNavigate('/'));

  contenedorInput.appendChild(userInput);
  contenedorInput.appendChild(emailInput);
  contenedorInput.appendChild(passwordInput);
  contenedorInput.appendChild(aceptregister);
  links.appendChild(parrafo1)
  contenedorInput.appendChild(links)
  contenedorInput.appendChild(buttonGoogle);
  contenedorInput.appendChild(buttonHome);
  homeDiv.appendChild(socialNetBy)


  return homeDiv;
};

/*aceptarRegistro.addEventListener('click', (e) => {
  const name = document.getElementById(userInput).value;
  const email = document.getElementById(E-mail).value;
  const password = document.getElementById(contraseña1).Value;
  //const passwordV = document.getElementById(verificacion-contraseña).value;
 /* if (name === ' ' || email === ' ' || contraseña === ' ' || contraseñaVerficada === ' '){
    alert('Completa los campos'); return;
  createUserWithEmailAndPassword(name, auth, email, password,)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...user.uid
        alert('Registro exitoso');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });
      onNavigate('/login');

 }); */
