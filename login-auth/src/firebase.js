// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJIEg3mN8RTShgjR_krAvttVdLbANiRmY",
  authDomain: "login-auth-2f536.firebaseapp.com",
  projectId: "login-auth-2f536",
  storageBucket: "login-auth-2f536.firebasestorage.app",
  messagingSenderId: "868051567705",
  appId: "1:868051567705:web:1b7bdcb6f33c17d0a71d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}