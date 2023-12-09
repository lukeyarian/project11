import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';  // If you're using Firebase Authentication
import 'firebase/firestore';  // If you're using Firebase Firestore
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwU9y_Fyxl5VYenDpfKy8EhtzHHNTXeyk",
    authDomain: "project11-bf202.firebaseapp.com",
    projectId: "project11-bf202",
    storageBucket: "project11-bf202.appspot.com",
    messagingSenderId: "777005251583",
    appId: "1:777005251583:web:ec6cab544486fb12b605ca"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const login = createUserWithEmailAndPassword(app)
const signup = signInWithEmailAndPassword(app)

export { auth, firestore };
export { login, signup };