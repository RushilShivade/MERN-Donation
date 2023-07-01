// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuUlMUSTDdN7bcTeEWr3tb63Gg3pHk9pY",
    authDomain: "ngo-donation-464d7.firebaseapp.com",
    projectId: "ngo-donation-464d7",
    storageBucket: "ngo-donation-464d7.appspot.com",
    messagingSenderId: "895888070443",
    appId: "1:895888070443:web:139853081d6888b8a3d76e",
    measurementId: "G-5SFMX7YTTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app, firebaseConfig);
const provider = new GoogleAuthProvider();

export { auth, provider };