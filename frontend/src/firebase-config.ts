// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATCkZbumZtAYN6YkfkX-4tMYenPdU4bNw",
  authDomain: "blog-ts-firebase-f9ea4.firebaseapp.com",
  databaseURL: "https://blog-ts-firebase-f9ea4-default-rtdb.firebaseio.com",
  projectId: "blog-ts-firebase-f9ea4",
  storageBucket: "blog-ts-firebase-f9ea4.appspot.com",
  messagingSenderId: "757760569494",
  appId: "1:757760569494:web:8a0fc9b29daf22c613d2b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
