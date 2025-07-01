import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "logine-commerce-3f5b3.firebaseapp.com",
  projectId: "logine-commerce-3f5b3",
  storageBucket: "logine-commerce-3f5b3.firebasestorage.app",
  messagingSenderId: "565810768520",
  appId: "1:565810768520:web:326b89431d93a63b678d3d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}