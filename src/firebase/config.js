// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// ! İmport Et
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! Fire store kurulum
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  // todo Ortam değişkeni import edildi
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatroom-dbec9.firebaseapp.com",
  projectId: "chatroom-dbec9",
  storageBucket: "chatroom-dbec9.appspot.com",
  messagingSenderId: "687806344876",
  appId: "1:687806344876:web:44ad3be8a56febb75fb909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//! get the reference of the partition for authentication
export const auth = getAuth(app);
//!  installation of google provider
export const provider = new GoogleAuthProvider();

//! Database reference retrieved
export const db = getFirestore(app);
