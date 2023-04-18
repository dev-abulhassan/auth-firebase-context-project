// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAg1T24-bJJeMu8I3UuP-MpdUbatYAQWCA",
   authDomain: "auth-firebase-context-pr-6ccb0.firebaseapp.com",
   projectId: "auth-firebase-context-pr-6ccb0",
   storageBucket: "auth-firebase-context-pr-6ccb0.appspot.com",
   messagingSenderId: "349910839515",
   appId: "1:349910839515:web:197b41adde641dea1ddcfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;