import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ1T3z7etFCO38QpGl8UQvqcYCAWRPs6c",
  authDomain: "xicoclassproject-579bb.firebaseapp.com",
  projectId: "xicoclassproject-579bb",
  storageBucket: "xicoclassproject-579bb.appspot.com",
  messagingSenderId: "396970834685",
  appId: "1:396970834685:web:bd23a246b1676f014a9c94",
  measurementId: "G-925M3LDKTF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fr = firebase.firestore();
/* if (process.env.NODE_ENV == "development" && location.hostname == 'localhost') {
    fr.useEmulator('localhost', 9090);
} */

const auth = firebase.auth();
const db = firebase.database();
const analytics = firebase.analytics();
const storage = firebase.storage();

export { fr, auth, db, analytics, storage, firebase };
