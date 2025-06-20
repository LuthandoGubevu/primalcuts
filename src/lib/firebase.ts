
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCN5awpd7WOszTuqECs118_BhUEQUmoX6k",
  authDomain: "primalcuts-1b76f.firebaseapp.com",
  projectId: "primalcuts-1b76f",
  storageBucket: "primalcuts-1b76f.appspot.com",
  messagingSenderId: "471670028004",
  appId: "1:471670028004:web:a3777005825c0fb4319ef1",
  measurementId: "G-JRZCS83SV3"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider, signInWithPopup, firebaseSignOut };
