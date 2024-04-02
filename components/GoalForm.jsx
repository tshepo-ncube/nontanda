"use client";
import React, { useState, useEffect } from "react";
import ModalNavbar from "./ModalNavbar";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import OpenAI from "openai";
import Button from "@mui/material/Button";
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

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

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
const GoalForm = ({ onAddGoal }) => {
  const [initialDate, setInitialDate] = useState("");

  const [goal, setGoal] = useState({
    text: "",
    timeline: "",
    description: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [goalName, setGoalName] = useState(null);
  const [goalDesc, setGoalDesc] = useState(null);
  const [goalTime, setGoalTime] = useState(null);
  const [goalReward, setGoalReward] = useState(null);

  async function addGoalFirebase() {
    const assistant = await openai.beta.assistants.create({
      name: "Goal Mentor",
      instructions: `You are an assistant designed to help Tshepo with his goal, his goal is : "${goalName}, his goal descripion is ${goalDesc}, he wants to achieve it by ${goalTime}, and will reward himself with ${goalReward}"`,

      //tools: [{ type: "code_interpreter" }],

      model: "gpt-4-1106-preview",
    });

    const thread = await openai.beta.threads.create();

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
      instructions: `You are an assistant designed to help Tshepo with his goal, his goal is : "${goalName}, his goal descripion is ${goalDesc}, he wants to achieve it by ${goalTime}, and will reward himself with ${goalReward}" ,Please address the user as Tshepo. Respond in less than 300 characters`,
    });
    try {
      const data = {
        Descr: goalDesc,
        Image: "",
        Title: goalName,
        dateCreated: new Date(),
        Reward: goalReward,
        Due: goalTime,
        userID: "tshepo@gmail.com",
        assistantID: assistant.id,
        runID: run.id,
        threadID: thread.id,
      };
      const docRef = await addDoc(collection(db, "goals"), data);
      console.log("Document written with ID: ", docRef.id);
      handleClick();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert(e);
    }
  }
  const setUserDetails = async (user) => {
    // Implementation for user registration

    const docRef = doc(db, "goals");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value,
    }));
  };

  const handleAddGoal = () => {
    addGoalFirebase();
    setGoalName("");
    setGoalDesc("");
    setGoalReward("");
    setGoalTime("");
  };

  useEffect(() => {
    // Calculate the initial date, 10 days from now
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10);

    // Format the date as "YYYY-MM-DD" for the input value
    const formattedDate = currentDate.toISOString().split("T")[0];

    // Set the initial date
    setInitialDate(formattedDate);
  }, []);

  return (
    <div style={{ marginTop: 10 }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your goal was added!
        </Alert>
      </Snackbar>
      {/* <ModalNavbar title={"Create A New Goal"} /> */}
      <form style={{ marginTop: 10, padding: 10 }}>
        <label className="block text-sm font-semibold mb-2">
          Goal Name:
          <input
            type="text"
            name="text"
            placeholder="I want to lose 30 pounds within the next six months to improve my overall health and well-being."
            value={goalName}
            onChange={(e) => {
              setGoalName(e.target.value);
            }}
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            required
          />
        </label>

        <label className="block text-sm font-semibold ">
          When do you want to achieve this goal:
        </label>
        <br />
        <input
          style={{ marginTop: -17 }}
          type="date"
          name="timeline"
          value={goalTime}
          onChange={(e) => {
            setGoalTime(e.target.value);
          }}
          className="w-full border border-gray-300 p-2 rounded-md mb-2"
          required
        />

        <label className="block text-sm font-semibold mb-2">
          Description:
          <textarea
            name="description"
            placeholder="I'm determined to shed 30 pounds in the next six months, prioritizing my health. I'll focus on a balanced diet, regular exercise, and self-care. This goal aims to enhance my overall well-being and vitality."
            required
            value={goalDesc}
            onChange={(e) => {
              setGoalDesc(e.target.value);
            }}
            className="w-full border h-40 resize-none border-gray-300 p-2 rounded-md mt-2"
          />
        </label>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="file_input"
        >
          Image Related To Goal
        </label>
        <div className="bg-blue-200 w-full p-4 rounded-lg mb-2 ">
          <p className="text-black">
            This is for visualization, the more you see an image to your goal,
            the more you manifest it!
          </p>
        </div>

        <input
          className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        ></input>

        <label className="block text-sm font-semibold mb-2">
          Reward:
          <textarea
            name="description"
            placeholder="After losing 20 pounds, I will treat myself to a new wardrobe. It's not just about the clothes; it's a tangible way to showcase the upcoming positive changes in my body and boost my confidence."
            required
            value={goalReward}
            onChange={(e) => {
              setGoalReward(e.target.value);
            }}
            className="w-full border h-40 resize-none border-gray-300 p-2 rounded-md mt-2"
          />
        </label>

        <Fab
          color="primary"
          type="submit"
          size="medium"
          className="bg-green-600 hover:bg-green-500 z-0 mt-2"
          variant="extended"
          onClick={handleAddGoal}
        >
          <AddIcon />
          Add Goal
        </Fab>
      </form>
    </div>
  );
};

export default GoalForm;
