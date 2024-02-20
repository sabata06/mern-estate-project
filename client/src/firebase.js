// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e6b65.firebaseapp.com",
  projectId: "mern-estate-e6b65",
  storageBucket: "mern-estate-e6b65.appspot.com",
  messagingSenderId: "175556399357",
  appId: "1:175556399357:web:b9c6cdced2a57e45842e94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
