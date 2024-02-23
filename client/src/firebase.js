// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e78cf.firebaseapp.com",
  projectId: "mern-blog-e78cf",
  storageBucket: "mern-blog-e78cf.appspot.com",
  messagingSenderId: "325135051363",
  appId: "1:325135051363:web:7340eb0b1da466b5776656"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);