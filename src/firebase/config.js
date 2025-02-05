import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDdbjUgqUQApB_2tolcUNZeGNpu_-2z2Fs",
    authDomain: "olx-clone-cc612.firebaseapp.com",
    projectId: "olx-clone-cc612",
    storageBucket: "olx-clone-cc612.firebasestorage.app",
    messagingSenderId: "414424871137",
    appId: "1:414424871137:web:8116e2232cd4d899dbc7a0"
  };
  
  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase)
  const db = getFirestore(firebase)
  const storage = getStorage(firebase)
  export { auth, db, storage ,firebase}