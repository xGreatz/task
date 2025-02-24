// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_MVi8ZSX1Hg0IlQUI8hAPx9m2TQ59OYc",
  authDomain: "taskproject-5cc35.firebaseapp.com",
  projectId: "taskproject-5cc35",
  storageBucket: "taskproject-5cc35.firebasestorage.app",
  messagingSenderId: "315905473859",
  appId: "1:315905473859:web:1461c686c50f3ce8a2c3f6",
  measurementId: "G-JT43NP03FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
