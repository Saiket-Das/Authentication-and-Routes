// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAms7_SrHbLZDGS4R6ZP6Co365pMMrHSAE",
    authDomain: "facebook-auth-practices.firebaseapp.com",
    projectId: "facebook-auth-practices",
    storageBucket: "facebook-auth-practices.appspot.com",
    messagingSenderId: "739848192520",
    appId: "1:739848192520:web:dd1ea1a33e2a9e02d547bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;