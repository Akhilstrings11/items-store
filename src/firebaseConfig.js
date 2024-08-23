import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDhY-BUBjFwaco_68t8kSjRbDsYihEs2m8",
  authDomain: "items-store-1414c.firebaseapp.com",
  projectId: "items-store-1414c",
  storageBucket: "items-store-1414c.appspot.com",
  messagingSenderId: "191309503967",
  appId: "1:191309503967:web:81a333bf9c87566dc2b86a"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };