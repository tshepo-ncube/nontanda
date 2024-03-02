"use client";
import HeaderComponent from "../../components/HeaderComponent";
import Foot from "../../components/Foot";
import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";
import LoginForm from "../../components/login";
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
      <HeaderComponent title={"Pricing | Mindful"} />
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
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            for="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          ></input>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              ></input>
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                for="remember"
                                className="text-gray-500 dark:text-gray-300"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Sign in
                        </button>
                        <div
                          class="px-2 sm:px-0 max-w-sm"
                          style={{ marginTop: -30 }}
                        >
                          <button
                            type="button"
                            onClick={handleSignIn}
                            class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                          >
                            <svg
                              class="mr-2 -ml-1 w-4 h-4"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="google"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 488 512"
                            >
                              <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                              ></path>
                            </svg>
                            Sign In with Google<div></div>
                          </button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet?{" "}
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            onClick={() => {
                              setSignState("SignUp");
                            }}
                          >
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <section
                className="bg-gray-50 dark:bg-gray-900"
                style={{ marginTop: 40 }}
              >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up for an account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            for="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label
                            for="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Confirm password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          ></input>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="text-blue-500 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              ></input>
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                for="remember"
                                className="text-gray-500 dark:text-gray-300"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Sign Up
                        </button>
                        <div
                          class="px-2 sm:px-0 max-w-sm"
                          style={{ marginTop: -30 }}
                        >
                          <button
                            type="button"
                            class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                          >
                            <svg
                              class="mr-2 -ml-1 w-4 h-4"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="google"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 488 512"
                            >
                              <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                              ></path>
                            </svg>
                            Sign Up with Google<div></div>
                          </button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have an account?{" "}
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            onClick={() => {
                              setSignState("SignIn");
                            }}
                          >
                            Sign In
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          <Foot />
        </div>
      </body>
    </>
  );
}

function SignIn() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer classNameName="bg-blue-500 p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        classNameName="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div classNameName="text-center mb-3">
            <p>Sign in with:</p>

            <div
              classNameName="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p classNameName="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperclassName="mb-4"
            label="Email address"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperclassName="mb-4"
            label="Password"
            id="form2"
            type="password"
          />

          <div classNameName="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn classNameName="mb-4 w-100">Sign in</MDBBtn>
          <p classNameName="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div classNameName="text-center mb-3">
            <p>Sign un with:</p>

            <div
              classNameName="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                classNameName="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p classNameName="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperclassName="mb-4"
            label="Name"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperclassName="mb-4"
            label="Username"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperclassName="mb-4"
            label="Email"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperclassName="mb-4"
            label="Password"
            id="form1"
            type="password"
          />

          <div classNameName="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>

          <MDBBtn classNameName="mb-4 w-100">Sign up</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
export default page;
