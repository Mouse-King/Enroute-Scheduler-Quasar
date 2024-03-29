import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithCustomToken,
} from "firebase/auth";
import {
  collection,
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  where,
  query,
  getDocs,
  setDoc,
  onSnapshot,
  deleteDoc,
  addDoc,
  endAt,
  orderBy,
  limit,
  startAfter,
  startAt,
  endBefore,
  limitToLast,
} from "firebase/firestore";

//prod
const prodConfig = {
  apiKey: "AIzaSyBCz663nS3U0s2gPj7-PYQP9aHbDh9r3i4",
  authDomain: "on-my-way-meet.firebaseapp.com",
  projectId: "on-my-way-meet",
  storageBucket: "on-my-way-meet.appspot.com",
  messagingSenderId: "1003067231566",
  appId: "1:1003067231566:web:adb1e43a9b5d778dae621f",
};

// Initialize Firebase
const app = initializeApp(prodConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  onSnapshot,
  where,
  createUserWithEmailAndPassword,
  setDoc,
  deleteDoc,
  addDoc,
  endAt,
  orderBy,
  limit,
  startAfter,
  startAt,
  endBefore,
  limitToLast,
};
