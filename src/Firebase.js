// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyDznBBBc3neHEO-L8LS4bWVEzmyrNQ6YKg",
  authDomain: "my-netflix-react.firebaseapp.com",
  projectId: "my-netflix-react",
  storageBucket: "my-netflix-react.appspot.com",
  messagingSenderId: "637637577476",
  appId: "1:637637577476:web:e4e51b679be430d95dde51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app);