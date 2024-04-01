"use client";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
//import { firebase } from "firebase";
// import { firebaseui } from "firebaseui";
//var firebase = require("firebase");
//var firebaseui = require("firebaseui");
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-TWCp-jNGYuzdjZbmD4tn5KsOCjgRCWM",
  authDomain: "mindfulmanifesters-bb23e.firebaseapp.com",
  projectId: "mindfulmanifesters-bb23e",
  storageBucket: "mindfulmanifesters-bb23e.appspot.com",
  messagingSenderId: "816933119912",
  appId: "1:816933119912:web:a009d7a035bf3c491c1f9d",
  measurementId: "G-1G8NESR5QL",
};
const app = initializeApp(firebaseConfig);

export default app;
