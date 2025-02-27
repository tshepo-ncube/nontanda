"use client";
import React, { useState, useEffect } from "react";
import GoalForm from "./GoalForm";
import Fab from "@mui/material/Fab";
import GoalView from "./GoalView";
//import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AddIcon from "@mui/icons-material/Add";

import SendIcon from "@mui/icons-material/Send";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  updateDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";
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
const db = getFirestore(app);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("New Goal");
  const [data, setData] = useState({});
  const toggleModal = (modalType) => {
    setIsOpen(!isOpen);
    setModalType(modalType);
  };
  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const getGoals = async () => {
    const candidatesCollectionRef = collection(db, "goals");
    const q = query(
      candidatesCollectionRef,
      where("userID", "==", "tshepo@gmail.com")
    );

    try {
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  const setUserDetails = async (user) => {
    // Implementation for user registration

    const docRef = doc(db, "users", "madara");

    // Set the data in the document
    const data = {
      CurrentMessages: 15,
      LastMessage: new Date(),
      Name: "Mandara",
      Plan: "Free",
    };

    //console.log(userObj.toUserObject());
    // Save the document
    await updateDoc(docRef, data)
      .then(() => {
        console.log("Document successfully written!");

        return { registeredUser: true, Error: "" };
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        return { registeredUser: false, Error: error };
      });
  };

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Goal Assistant</h1>

      <List toggleModal={toggleModal} setData={setData} />

      <div className="bg-green-700 hover:bg-green-500  rounded-full shadow-md fixed bottom-6 right-7">
        <Fab
          color="primary"
          variant="extended"
          onClick={() => {
            //getGoals();
            //setUserDetails({});
            toggleModal("New Goal");
          }}
        >
          <AddIcon />
          new goal
        </Fab>
      </div>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-white ">
            <div
              style={{ maxHeight: "100%", overflowY: "auto", padding: "20px" }}
            >
              {modalType === "New Goal" ? (
                <div style={{ marginTop: 60 }}>
                  <GoalForm />
                </div>
              ) : (
                <div style={{ marginTop: 60 }}>
                  <GoalView data={data} />
                </div>
              )}
            </div>
          </div>

          <div className="bg-black p-8 rounded shadow-md w-1/2 ml-2 mr-2">
            <button
              onClick={toggleModal}
              className="absolute top-0 ml-4 left-0 mt-4 mr-4 text-white-500 hover:text-white-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGoals;
//  key={card.id}
//             title={card.title}
//             reward={card.reward}
//             descr={card.descr}
//             dateCreated={card.dateCreated}
const Card = ({ title, reward, descr, dateCreated, toggleModal, setData }) => {
  return (
    <div
      onClick={() => {
        setData({ title: title, descr: descr });
        toggleModal("GoalView");
      }}
      className="block max-w-md h-200 mx-100 rounded overflow-hidden shadow-lg border bg-white-100 cursor-pointer"
    >
      <img
        className="w-full h-40"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt="Serene Landscape"
      />

      <div className="flex flex-col justify-between px-6 py-4 h-200">
        <div className="text-green-500 mb-2 text-sm">Reflected 2 days ago</div>
        <div className="mt-auto mb-2">
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-xl mb-2">{title}</div>
          {/* Other content goes here */}
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>; */
}
//export default Card;

const List = ({ toggleModal, setData }) => {
  // Sample data for demonstration
  const [goals, setGoals] = useState([]);
  const cardData = [
    { id: 1, recipientName: "I want to learn mandarin", senderName: "Bob" },
    {
      id: 2,
      recipientName: "I want to have a consistent routine",
      senderName: "Dave",
    },
    {
      id: 3,
      recipientName: "I want to achieve a 90% for my research proposal",
      senderName: "Dave",
    },
    // { id: 3, recipientName: "Eve", senderName: "Frank" },
  ];

  const getGoals = async () => {
    const candidatesCollectionRef = collection(db, "goals");
    const q = query(
      candidatesCollectionRef,
      where("userID", "==", "tshepo@gmail.com")
    );

    try {
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      const goalList = [];
      snapshot.forEach((doc) => {
        goalList.push(doc.data());
        console.log(doc.id, "=>", doc.data());
      });
      setGoals(goalList);
      console.log(goals);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((card) => (
          <Card
            key={card.id}
            title={card.Title}
            reward={card.reward}
            descr={card.Descr}
            setData={setData}
            toggleModal={toggleModal}
            dateCreated={card.dateCreated}
          />
        ))}
      </div>
    </>
  );
};
