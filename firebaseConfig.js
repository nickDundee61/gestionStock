// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
import {getFirestore} from "./firebase-firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-yDBRtQz41FEHxA80mEFz-Nd_ZuhJLpk",
  authDomain: "viaformation-b4604.firebaseapp.com",
  projectId: "viaformation-b4604",
  storageBucket: "viaformation-b4604.appspot.com",
  messagingSenderId: "487880074228",
  appId: "1:487880074228:web:e68f96d71048f94a144fa1"
};

// Initialize Firebase
const db = getFirestore(app)
const app = initializeApp(firebaseConfig);

export {db}