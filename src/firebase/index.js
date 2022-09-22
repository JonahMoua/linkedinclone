import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config";

const firebaseConfig = {
    apiKey: "AIzaSyAWQsfDTqC5j7s5DKGDhvCavLVP6KaLh3M",
    authDomain: "linkedinclone-561f7.firebaseapp.com",
    projectId: "linkedinclone-561f7",
    storageBucket: "linkedinclone-561f7.appspot.com",
    messagingSenderId: "1090669297990",
    appId: "1:1090669297990:web:6c8b489db6b291dc306547",
    measurementId: "G-P9983HQLDR"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
