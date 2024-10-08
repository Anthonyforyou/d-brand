// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore importeren
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBzxWq0jiTDoajmjODyGAU2w_pyWeDMgc",
  authDomain: "dbrand-d66ca.firebaseapp.com",
  databaseURL: "https://dbrand-d66ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dbrand-d66ca",
  storageBucket: "dbrand-d66ca.appspot.com",
  messagingSenderId: "245035494162",
  appId: "1:245035494162:web:763e09c7ef41c95c4ce1cb",
  measurementId: "G-PC6DTS5HYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

// Controleer of analytics ondersteund wordt
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialiseer Firestore
const database = getFirestore(app);

export { database, analytics };
