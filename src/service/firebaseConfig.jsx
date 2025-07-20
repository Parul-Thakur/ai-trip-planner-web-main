// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_H1qTvI0MUaDghorYFYL4_W_kpOI89kg",
  authDomain: "ai-trip-pla-dc5fd.firebaseapp.com",
  projectId: "ai-trip-pla-dc5fd",
  storageBucket: "ai-trip-pla-dc5fd.firebasestorage.app",
  messagingSenderId: "190159957383",
  appId: "1:190159957383:web:6df93dfb0c6f40259ab722",
  measurementId: "G-GN99SGSK0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);