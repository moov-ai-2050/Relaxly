// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl6dlZrq5u9cz6fJqoCLDhPAnA8Xv2PiE",
  authDomain: "relaxly-ai.firebaseapp.com",
  projectId: "relaxly-ai",
  storageBucket: "relaxly-ai.firebasestorage.app",
  messagingSenderId: "228675737875",
  appId: "1:228675737875:web:62941e784e0d2770bfa2e6",
  measurementId: "G-H5MZ16SB6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);