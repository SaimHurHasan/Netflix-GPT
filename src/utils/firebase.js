// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-1ravuiuVuj-6T84SR0qIEx7_TDVzf0",
  authDomain: "netflixgpt-6f92f.firebaseapp.com",
  projectId: "netflixgpt-6f92f",
  storageBucket: "netflixgpt-6f92f.firebasestorage.app",
  messagingSenderId: "902250898385",
  appId: "1:902250898385:web:09527ecc67ab9eb16876f0",
  measurementId: "G-VCREBR4SQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();