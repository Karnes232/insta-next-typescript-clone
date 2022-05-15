// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlasEsGvCQZAohjEZfku6c4qZL2MGDyc",
  authDomain: "new-insta-ab0ae.firebaseapp.com",
  projectId: "new-insta-ab0ae",
  storageBucket: "new-insta-ab0ae.appspot.com",
  messagingSenderId: "333270641264",
  appId: "1:333270641264:web:3c76f4945f138da43ba2b5"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };