// Firebase initialization and exports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUD7Ur8Xpq79y1UF0jYGinfypY7NIorEg",
    authDomain: "compscileveling.firebaseapp.com",
    projectId: "compscileveling",
    storageBucket: "compscileveling.firebasestorage.app",
    messagingSenderId: "806148574323",
    appId: "1:806148574323:web:585d7704db0a6cb778ae06",
    measurementId: "G-MKNXGJ9LQS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// re-export functions for ease of use
export {
    auth,
    db,
    doc,
    setDoc,
    getDoc,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
};