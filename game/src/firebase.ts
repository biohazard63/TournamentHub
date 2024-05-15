// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKnSigzSwBbiSaRx6o2ykWekescij6xcQ",
    authDomain: "tournamenthub-a0a1d.firebaseapp.com",
    projectId: "tournamenthub-a0a1d",
    storageBucket: "tournamenthub-a0a1d.appspot.com",
    messagingSenderId: "761629007181",
    appId: "1:761629007181:web:44816a1dca3c85e6966b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);