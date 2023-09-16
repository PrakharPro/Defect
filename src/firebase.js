// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZvYkAYgpjgqL1PKH1wi8k62fUpPPjjk",
  authDomain: "defect-aba2f.firebaseapp.com",
  projectId: "defect-aba2f",
  storageBucket: "defect-aba2f.appspot.com",
  messagingSenderId: "745262437383",
  appId: "1:745262437383:web:22ee472f02e0f9d4bec6a2",
  measurementId: "G-TY02HDTM7S"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("User is signed in");
  } else {
    // User is signed out
    // ...
    console.log("User is signed out");
  }
});

module.exports = {firebaseapp};

