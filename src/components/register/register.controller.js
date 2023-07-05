import {
  getAuth, createUserWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export const signInUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.history.pushState({}, '', `${window.location.origin}/`);
      window.dispatchEvent(new PopStateEvent('popstate'));

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      if (error.code === 'auth/email-already-in-use') {
        document.getElementById('repeat-email').style.display = 'block';
      } else if (error.code === 'auth/weak-password') {
        document.getElementById('6-letters').style.display = 'block';
      } else {
        document.getElementById('7-letter').style.display = 'block';
      }
    });
};
