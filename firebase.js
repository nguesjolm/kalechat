// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2uHDrcZjj4N_LgsDC_mpPyQra3M7myc",
  authDomain: "chatkale-9bb0d.firebaseapp.com",
  projectId: "chatkale-9bb0d",
  storageBucket: "chatkale-9bb0d.appspot.com",
  messagingSenderId: "513045191945",
  appId: "1:513045191945:web:256e9cd4f73e162aba07d8",
  measurementId: "G-3HVZFVVH7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);