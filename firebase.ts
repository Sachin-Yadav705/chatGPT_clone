import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASo4UsM7uqnfJkW-ydBPD28qZ81GmidfU",
  authDomain: "chatgptclone-1893f.firebaseapp.com",
  projectId: "chatgptclone-1893f",
  storageBucket: "chatgptclone-1893f.appspot.com",
  messagingSenderId: "647062560115",
  appId: "1:647062560115:web:d5d1c3e8b695a106e57906",
};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
