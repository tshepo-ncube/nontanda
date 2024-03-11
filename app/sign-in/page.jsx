"use client";
import HeaderComponent from "../../components/HeaderComponent";
import Foot from "../../components/Foot";
import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";
import LoginForm from "../../components/login";
import SignUp from "../../components/sign-in-component/SignUp";

import SignIn from "../../components/sign-in-component/SignIn";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
// Initialize the FirebaseUI Widget using Firebase.
function page() {
  const [signState, setSignState] = useState("SignIn");
  const [signedIn, setSignedIn] = useState(null);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const handleSignIn = () => {
    console.log("handle signIn");

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        window.location.href = "http://localhost:3000/goals";
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        console.log("User is logged in:", user);
        setSignedIn(true);

        // User is signed in.
        setUser({
          email: user.email,
          name: user.displayName,
          profilePicture: user.photoURL,
        });

        window.location.href = "http://localhost:3000/goals";
      } else {
        setSignedIn(false);
        setUser(null);
        // No user is signed in.
        console.log("No user is logged in");
      }
    });

    // To stop listening for changes (unsubscribe) - optional
    return () => unsubscribe();
  }, [auth]); // Ensure that auth is added to the dependency array to avoid unnecessary re-renders

  return (
    <>
      <HeaderComponent title={"SignIn | Mindful"} />
      <body>
        <div classNameName="mx-auto  max-w px-8">
          <Navbar />
          {/* {header} */}
          {/* {children} */}
          {/* 
          <br />
          <br />

          <br />
          <br />
   
          
      
          <Foot /> */}
          <br />
          <br />

          {signState === "SignIn" ? (
            <>
              <SignIn />
            </>
          ) : (
            <>
              <SignUp />
            </>
          )}

          <Foot />
        </div>
      </body>
    </>
  );
}

export default page;
