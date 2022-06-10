// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7XNn23_WP7AEmeX4eq9C6BchQsbn1l0",
  authDomain: "kdshop-c042b.firebaseapp.com",
  projectId: "kdshop-c042b",
  storageBucket: "kdshop-c042b.appspot.com",
  messagingSenderId: "165995465769",
  appId: "1:165995465769:web:1fa0ba5f55f313ab46a038",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
