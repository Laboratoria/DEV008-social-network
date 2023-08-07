// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAvA2-uauLNm5HRGSWkIqnt0QOMB2QYo",
  authDomain: "labsconnect.firebaseapp.com",
  projectId: "labsconnect",
  storageBucket: "labsconnect.appspot.com",
  messagingSenderId: "178492302381",
  appId: "1:178492302381:web:e980e33e9675624edb44a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)