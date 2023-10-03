import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage} from "firebase/storage"


//turin profile
const firebaseConfig = {
  apiKey: "AIzaSyDVZEjFbpPWKYsGkxJcvRW4pUlNKTqsaM4",
  authDomain: "tracker-46d44.firebaseapp.com",
  projectId: "tracker-46d44",
  storageBucket: "tracker-46d44.appspot.com",
  messagingSenderId: "707139540702",
  appId: "1:707139540702:web:6debbd0f5d6e772b77944f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage()
