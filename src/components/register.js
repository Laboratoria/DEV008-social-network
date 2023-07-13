export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenidos al registro';

  const imgchico = document.createElement('aside');
 // imgchico.src= `${}`;

  const title = document.createElement('header');
  //imgchico.src= `${}`;

  const titleDivRegister = document.createElement('li'); 

  const contenedor = document.createElement('main');
  contenedor.className = 'contenedor-register';

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

  const aceptregister= document.createElement('button');
  aceptregister.id = 'registerbutton'
  aceptregister.classList.add('button');
  aceptregister.textContent = 'Registrar';


  const buttonHome = document.createElement('button');
  buttonHome.classList.add('button');
  buttonHome.textContent = 'Regresar';

  const links = document.createElement('section');

  const parrafo1 = document.createElement('p');
  parrafo1.textContent = 'Ó registrate con tu cuenta';

  const linkGoogle = document.createElement('div');
  
  const socialNetBy = document.createElement ('footer');
  socialNetBy.textContent =' SOCIAL NETWORK BY G-K-M';

 
 
 
  buttonHome.addEventListener('click', () => onNavigate('/'));
 

  homeDiv.appendChild(imgchico);
  homeDiv.appendChild(buttonHome);
  homeDiv.appendChild(title)
  contenedor.appendChild(userInput);
  contenedor.appendChild(emailInput);
  contenedor.appendChild(passwordInput);
  contenedor.appendChild(password2Input);
  contenedor.appendChild(aceptregister);
  links.appendChild(parrafo1)
  links.appendChild(linkGoogle)
  contenedor.appendChild(links)
  homeDiv.appendChild(contenedor);
  homeDiv.appendChild(socialNetBy)


  return homeDiv;
};
