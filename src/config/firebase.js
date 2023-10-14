import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAa0wafio-lw74IU6--uKT9urs0MVl-tAg",
  authDomain: "fitnesstracker-47280.firebaseapp.com",
  projectId: "fitnesstracker-47280",
  storageBucket: "fitnesstracker-47280.appspot.com",
  messagingSenderId: "704745838903",
  appId: "1:704745838903:web:6e749a718beeba263ce2b2",
  measurementId: "G-4J5BJ90QGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage()
