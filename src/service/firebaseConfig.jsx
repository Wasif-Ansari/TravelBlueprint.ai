// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import (getFirestore) from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjbY11mqeuLAlX93modE-6alAexkOPePQ",
  authDomain: "ai-trip-planner-3ce78.firebaseapp.com",
  projectId: "ai-trip-planner-3ce78",
  storageBucket: "ai-trip-planner-3ce78.firebasestorage.app",
  messagingSenderId: "717364267473",
  appId: "1:717364267473:web:44d3dc36ab103b27b1b8f0",
  measurementId: "G-D5YJR47G9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);