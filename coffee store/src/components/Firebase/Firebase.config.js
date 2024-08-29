// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZtlZMf4cIAeuDDgxm6zU2ynItSFw4cQ",
  authDomain: "coffee-store-8dabb.firebaseapp.com",
  projectId: "coffee-store-8dabb",
  storageBucket: "coffee-store-8dabb.appspot.com",
  messagingSenderId: "663022755252",
  appId: "1:663022755252:web:0130b83286c3a08dd1a6e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
