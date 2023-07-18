/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3nkMmxJN-mrSa5VBxs62i1lpBv0wDOhA',
  authDomain: 'social-instapet.firebaseapp.com',
  projectId: 'social-instapet',
  storageBucket: 'social-instapet.appspot.com',
  messagingSenderId: '1083258680295',
  appId: '1:1083258680295:web:6ed3bd1f88ce0f51bb0342',
  measurementId: 'G-6H0S24JL2S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(firebaseConfig);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('¡Iniciaste sesión!');
  } else {
    console.log('No hay usuario');
  }
});
