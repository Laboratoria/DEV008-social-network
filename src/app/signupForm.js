import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { auth } from './firebase.js'
const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);
  
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
    //para cerrar el modal de registro (aquí le falta)
    const signupModal = document.querySelector('#signupModal')
      } catch (error) {
        console.log(error)
      }
  
});
