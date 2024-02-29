"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
// Initialize the FirebaseUI Widget using Firebase.
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#0096FF");
  const [textColor, setTextColor] = useState("white");
  const [signedIn, setSignedIn] = useState(null);
  const [user, setUser] = useState(null);
  const auth = getAuth();

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

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    console.log("Handle logout...");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
    const changeColor = () => {
      //   if (window.scrollY >= 90) {
      //     setColor('#ffffff');
      //     setTextColor('#000000');
      //   } else {
      //     setColor('transparent');
      //     setTextColor('#ffffff');
      //   }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        borderBottom: 10,
        borderBottomColor: "black",
        borderColor: "black",
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div
        className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white"
        style={{}}
      >
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Mindful
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>

          {user ? (
            <>
              <li className="p-4">
                <Link href="/goals">My Goals</Link>
              </li>
              <li className="p-4">
                <Link href="/profile">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li className="p-4">
                <Link href="/goals">My Goals</Link>
              </li>
            </>
          )}

          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>

          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="p-4">
            {signedIn ? (
              <>
                <Link href="" onClick={handleLogout}>
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link href="" onClick={handleSignIn}>
                  Sign In
                </Link>
              </>
            )}
          </li>

          {/* <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li> */}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-500 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-500 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>

            {user ? (
              <>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="/goals">My Goals</Link>
                </li>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="/profile">Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="/goals">My Goals</Link>
                </li>
              </>
            )}

            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              {signedIn ? (
                <>
                  <Link href="" onClick={handleLogout}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link href="" onClick={handleSignIn}>
                    Sign In
                  </Link>
                </>
              )}
            </li>

            {/* <li className='p-4'>
                <Link href='/chat'>Chat</Link>
            </li> */}
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
