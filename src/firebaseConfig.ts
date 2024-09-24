// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjB4RR6YSAPItW58DI2g4lDogDYCq8ODI",
    authDomain: "meudinheiro-eec28.firebaseapp.com",
    projectId: "meudinheiro-eec28",
    storageBucket: "meudinheiro-eec28.appspot.com",
    messagingSenderId: "561356935233",
    appId: "1:561356935233:web:174e8077e3aaae2c9476c0"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
