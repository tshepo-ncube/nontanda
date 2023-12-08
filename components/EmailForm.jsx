'use client'

// pages/index.js
import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-TWCp-jNGYuzdjZbmD4tn5KsOCjgRCWM",
  authDomain: "mindfulmanifesters-bb23e.firebaseapp.com",
  projectId: "mindfulmanifesters-bb23e",
  storageBucket: "mindfulmanifesters-bb23e.appspot.com",
  messagingSenderId: "816933119912",
  appId: "1:816933119912:web:a009d7a035bf3c491c1f9d",
  measurementId: "G-1G8NESR5QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to insert data into Firestore
const insertDataIntoFirestore = async (name, email) => {
  try {
    const emailListRef = collection(db, "emailList");
    const newDocRef = await addDoc(emailListRef, {
      name: name,
      email: email
    });
    console.log("Document written with ID: ", newDocRef.id);
    return true; // Success
  } catch (error) {
    console.error("Error adding document: ", error);
    return false; // Error
  }
};



const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleSuccessSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
  };

  const handleErrorSnackbarClose = () => {
    setErrorSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await insertDataIntoFirestore(name, email);

    if (success) {
      setSuccessSnackbarOpen(true);
    } else {
      setErrorSnackbarOpen(true);
    }

    // Reset the form after submission
    setName('');
    setEmail('');
  };

  return (
    <center>
      <div className="bg-white p-8 rounded max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Join Our Email List</h2>
        <p className="font mb-6 text-gray-800">Be the first to hear about our latest free content, courses, and exclusive offerings. We respect your time and pledge not to flood your inbox with daily emails – that's our commitment to you.</p>

        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none">
              Join
            </button>
          </div>
        </form>

        {/* Success Snackbar */}
        <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={handleSuccessSnackbarClose}>
          <MuiAlert onClose={handleSuccessSnackbarClose} severity="success" sx={{ width: '100%' }}>
            Email List Join Successfully!
          </MuiAlert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleErrorSnackbarClose}>
          <MuiAlert onClose={handleErrorSnackbarClose} severity="error" sx={{ width: '100%' }}>
            Error Joining Email List. Please Try Again.
          </MuiAlert>
        </Snackbar>
      </div>
    </center>
  );
};

export default EmailForm;