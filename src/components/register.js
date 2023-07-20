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
  registerImg.classList.add('contenedorImagen');
  conteImagen.appendChild(registerImg);

  const contenedorInput = document.createElement('form');
  contenedorInput.classList.add('contenedorFormulario');
  registerDiv.appendChild(contenedorInput);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../musiClub -logo.JPG';
  headerLogo.classList.add('headerLogo');
  contenedorInput.appendChild(headerLogo);


  const userInput = document.createElement('input');
  userInput.classList.add('Input-registro');
  userInput.id= 'Nombre';
  userInput.placeholder = 'Nombre de usuario';
  userInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.classList.add('Input-registro');
  emailInput.id= 'email';
  emailInput.placeholder = 'E-mail';
  emailInput.required = true;

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('Input-registro');
  passwordInput.id= 'Contraseña';
  passwordInput.placeholder = 'Escribe tu contraseña (al menos 8 caracteres)';
  passwordInput.required = true;
  passwordInput.minLength = 8;

  const password2Input = document.createElement('input');
  password2Input.classList.add('Input-registro');
  password2Input.id= 'verificacion-contraseña';
  password2Input.placeholder = 'Repite la contraseña';
  password2Input.required = true;
  password2Input.minLength = 8;

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
  links.appendChild(linkGoogle)

  const buttonGoogle = document.createElement('img');
  buttonGoogle.src = 'https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_1280.png';
  buttonGoogle.classList.add('buttonGoogle');



  const socialNetBy = document.createElement ('footer');
  socialNetBy.textContent =' SOCIAL NETWORK BY G-K-M';


  buttonHome.addEventListener('click', () => onNavigate('/'));



  contenedorInput.appendChild(userInput);
  contenedorInput.appendChild(emailInput);
  contenedorInput.appendChild(passwordInput);
  contenedorInput.appendChild(password2Input);
  contenedorInput.appendChild(aceptregister);
  links.appendChild(parrafo1)
  contenedorInput.appendChild(links)
  contenedorInput.appendChild(buttonGoogle);
  contenedorInput.appendChild(buttonHome);
  homeDiv.appendChild(socialNetBy)


  return homeDiv;
};

/*aceptregister.addEventListener('click', () => {
  const name = document.getElementById(userInput).value;
  if (name === ' '){
    alert(' Completa nombre '); return;
  }
  
}
);*/