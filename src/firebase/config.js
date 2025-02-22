import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
apiKey: "AIzaSyD4Dl-VxsVRb7MLP3a9I8U4F4il9CI7vXg",
authDomain: "olx-clone-1-59b2d.firebaseapp.com",
projectId: "olx-clone-1-59b2d",
storageBucket: "olx-clone-1-59b2d.firebasestorage.app",
messagingSenderId: "5009061319",
appId: "1:5009061319:web:c372c9b715eb4854f1d5e2"
};
  
  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase)
  const db = getFirestore(firebase)
  const storage = getStorage(firebase)
  export { auth, db, storage ,firebase}