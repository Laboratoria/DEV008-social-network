import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhmNVMP2orY3iOmOT6DdaVABzLyzydVLY',
  authDomain: 'redis-ccc00.firebaseapp.com',
  projectId: 'redis-ccc00',
  storageBucket: 'redis-ccc00.appspot.com',
  messagingSenderId: '718676390172',
  appId: '1:718676390172:web:516edc445106e832a98ad9',
  measurementId: 'G-JQF50P4QXX',

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const savePosts = (post) => {
addDoc(collection(db, 'posts'), {post})
};
export const getPosts = () => console.log('Get Posts');