/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvAiTov1h1P4refJwXUEuIuxAHwEiXJvU',
  authDomain: 'instapet-rs9.firebaseapp.com',
  projectId: 'instapet-rs9',
  storageBucket: 'instapet-rs9.appspot.com',
  messagingSenderId: '20626526101',
  appId: '1:20626526101:web:f0f2fbdc4f69aa5164709c',
  measurementId: 'G-NPGVFY50GP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function googleLogin() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}


