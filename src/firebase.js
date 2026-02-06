// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbAH8unp-esBk79FvZEO-eKAiCS3-rsbU",
  authDomain: "project-hub-practice.firebaseapp.com",
  projectId: "project-hub-practice",
  storageBucket: "project-hub-practice.firebasestorage.app",
  messagingSenderId: "1087471347404",
  appId: "1:1087471347404:web:491934147db02b11c7c469",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
