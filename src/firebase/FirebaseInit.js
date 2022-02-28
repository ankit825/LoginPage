import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyCM09ksiWywLhBqqwNdQKd2Vj4-0ZUfRqY",
  authDomain: "loginpage-d4717.firebaseapp.com",
  projectId: "loginpage-d4717",
  storageBucket: "loginpage-d4717.appspot.com",
  messagingSenderId: "1007572541880",
  appId: "1:1007572541880:web:96ceafa99d449bb21a2f4d",
  measurementId: "G-QKECX07PW7",
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
