// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsIUfgK8X8ipx6ah2GWlOpzUFszRgkjHk",
  authDomain: "taskform-52f0d.firebaseapp.com",
  projectId: "taskform-52f0d",
  storageBucket: "taskform-52f0d.firebasestorage.app",
  messagingSenderId: "171643385313",
  appId: "1:171643385313:web:200822254f1de8ad34cea0",
  measurementId: "G-9JJW9CZ214",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
