import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCV10tcYEAg-ia9_8qFolUYMhdbOrGAZq0",
  authDomain: "chat-app-63984.firebaseapp.com",
  projectId: "chat-app-63984",
  storageBucket: "chat-app-63984.appspot.com",
  messagingSenderId: "1051632990094",
  appId: "1:1051632990094:web:7671080c409d764bda16df",
  measurementId: "G-QC5MFB8PNB",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
export default firebase;
