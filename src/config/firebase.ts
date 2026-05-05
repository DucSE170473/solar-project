import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkYDH550o_tKIZXLLXSCQnOCFcCAiqHWo",
  authDomain: "ttco-corp.firebaseapp.com",
  projectId: "ttco-corp",
  storageBucket: "ttco-corp.firebasestorage.app",
  messagingSenderId: "1084506312181",
  appId: "1:1084506312181:web:6e24076caa70c419daa4bc",
  measurementId: "G-S7ME8T9CR0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();