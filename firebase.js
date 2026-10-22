// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcBRwrjn7Ic7UT-tOYawIoO_JIGbplqg",
  authDomain: "cart-96614.firebaseapp.com",
  projectId: "cart-96614",
  storageBucket: "cart-96614.firebasestorage.app",
  messagingSenderId: "307100773399",
  appId: "1:307100773399:web:300da4d834a2cfe67e4052",
  measurementId: "G-WTW2CH1FCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);