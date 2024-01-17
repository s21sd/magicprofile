// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEICrlyqcMWQECs3l16kATY56A5-fO6eM",
  authDomain: "magicprofile-6041b.firebaseapp.com",
  projectId: "magicprofile-6041b",
  storageBucket: "magicprofile-6041b.appspot.com",
  messagingSenderId: "320049731985",
  appId: "1:320049731985:web:3f77fea4ac3fc0ac576230",
  measurementId: "G-BM5YCP74X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;