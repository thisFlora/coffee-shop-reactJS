// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyBc6Tzty3G2MTY1RGAbHmcGl1hIC1QCkXw",
     authDomain: "coffeeshop-reactjs.firebaseapp.com",
     projectId: "coffeeshop-reactjs",
     storageBucket: "coffeeshop-reactjs.appspot.com",
     messagingSenderId: "484972833643",
     appId: "1:484972833643:web:3125a8bfa8c4e1f704ba2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);