// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCFoosaUCt3acT70-h3dLRBuXa-qsiqbSk",
  authDomain: "oval-smile-423310-p8.firebaseapp.com",
  projectId: "oval-smile-423310-p8",
  storageBucket: "oval-smile-423310-p8.appspot.com",
  messagingSenderId: "435168622893",
  appId: "1:435168622893:web:863d435eea5bff1e07bba4",
  measurementId: "G-6GKJBPVT7Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
