"use client";
import React, { useState, useEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Fab, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { MdDelete } from "react-icons/md";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IoIosArrowBack } from "react-icons/io";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatCard from "../goals-components/ChatCard";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import OpenAI from "openai";
import GoalForm from "../GoalForm";
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
  increment,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function formatDateToWords(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month, day] = dateString.split("-").map(Number);

  const monthName = months[month - 1];

  return `${monthName} ${day}, ${year}`;
}
function ReflectionAssistant() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [entry, setEntry] = useState("");
  const [insights, setInsights] = useState(true);
  const [loading, setLoading] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(
    "Lately, I feel like I'm drifting apart from the people I care about most, and it's leaving me feeling lonely and disconnected..."
  );

  const placeholderOptions = [
    "I'm feeling overwhelmed by the constant pressure to perform at work, and it's draining me both mentally and emotionally...",
    "The thought of my upcoming exam is like a dark cloud looming over me, causing my stomach to churn with anxiety every time I think about it...",
    "I can't seem to shake this feeling of dissatisfaction with my appearance, and it's taking a toll on my self-confidence and overall well-being...",
    "My relationships feel strained and distant lately, and I can't help but wonder if I'm failing as a friend/partner/family member...",
    "Every day feels like a battle to keep my head above water, and I'm exhausted from trying to juggle all of life's demands...",
    "The future feels uncertain and daunting, and I'm struggling to find a sense of direction or purpose in my life...",
    "No matter how hard I try to stay positive, negative thoughts and self-doubt keep creeping in, making it difficult to see a way out of this rut...",
  ];
  const [nav, setNav] = useState(false);
  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");
  const [textColor, setTextColor] = useState("black");
  // const [messages, setMessages] = useState([
  const [messageCount, setMessageCount] = useState(0);
  //   {
  //     message:
  //       " I feel good about myself, I am fostering a reslient mindset, I am trying to be more reslient",
  //     role: "user",
  //   },
  //   {
  //     message:
  //       "  Fostering a resilient mindset, embracing positivity, and prioritizing mental well-being for a healthier, happier, and more fulfilling life journey. How are you going to make sure you remain reslient?",
  //     role: "assistant",
  //   },
  // ]);

  const [messages, setMessages] = useState([]);
  const [newGoal, setNewGoal] = useState(false);
  const [msgsLoading, setMsgsLoading] = useState(true);
  const [goals, setGoals] = useState([
    // {
    //   Descr: "I want to win",
    //   Due: "2024-05-31",
    //   Image: "",
    //   Reward: null,
    //   Title: "I want to win a sprint race",
    //   assistantID: "asst_V5hJOxL2VdRlSjcjB1vwdhkE",
    //   dateCreated: "March 25, 2024 at 5:28:52 PM UTC+2",
    //   runID: "run_qjQ2OKAdQ0RVBaY35YQ637Q8",
    //   threadID: "thread_rE5NuiYYyYcAxo1SsYSvB1rA",
    //   userID: "tshepo@gmail.com",
    // },
  ]);
  const divRef = useRef(null);
  const sendBtnRef = useRef(null);
  const [upgrade, setUpgrade] = useState(false);
  const modRef = useRef(null);
  const [currentGoal, setCurrentGoal] = useState({
    // Descr: "I want to win",
    // Due: "2024-05-31",
    // Image: "",
    // Reward: null,
    // Title: "I want to win a sprint race",
    // assistantID: "asst_V5hJOxL2VdRlSjcjB1vwdhkE",
    // dateCreated: "March 25, 2024 at 5:28:52 PM UTC+2",
    // runID: "run_qjQ2OKAdQ0RVBaY35YQ637Q8",
    // threadID: "thread_rE5NuiYYyYcAxo1SsYSvB1rA",
    // userID: "tshepo@gmail.com",
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const waitForCompletion = async (threadId, runId) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    while (runStatus.status !== "completed") {
      await delay(5000); // Wait for 5 seconds before checking again
      runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    }
    return runStatus;
  };

  const checkStatusAndPrintMessages = async (threadId, runId) => {
    await waitForCompletion(threadId, runId);
    let messages = await openai.beta.threads.messages.list(threadId);
    let msgList = messages.data;
    // If you want the messages in reverse chronological order, just sort them as such.
    // Since you're calling reverse() after sorting by created_at descending, it's equivalent to sorting by created_at ascending.
    msgList.sort((a, b) => a.created_at - b.created_at);
    sessionStorage.setItem("messages", JSON.stringify(msgList));
    setMessages(msgList);
    // msgList.forEach((msg) => {
    //   const role = msg.role;
    //   // Ensure that msg.content[0] and msg.content[0].text exist before trying to access .value
    //   const content =
    //     msg.content[0] && msg.content[0].text
    //       ? msg.content[0].text.value
    //       : "Content missing";
    //   // console.log(
    //   //   `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
    //   // );
    //   // console.log("\n");
    // });
    // let length = msgList.length;
    // if (msgList[length - 1].role !== "user") {
    //   console.log("loading........");
    //   checkStatusAndPrintMessages(threadId, runId);
    // } else {
    //   setLoading(false);
    // }
    setLoading(false);
    setMsgsLoading(false);
  };

  // Step 2: Scroll function
  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  const scrollToMod = () => {
    modRef.current.scrollTop = modRef.current.scrollHeight;
  };

  // const scrollToButton = () => {
  //   sendBtnRef.current.scrollTop = divRef.current.scrollHeight;
  // };

  // Calculate the number of rows based on the length of the text
  const calculateRows = (text) => {
    const newLines = (text.match(/\n/g) || []).length + 1;
    const rows = Math.min(5, newLines + 1); // Limit to 5 rows
    return rows;
  };

  const handleSubscribe = () => {};

  const getGoalsFirebase = async () => {
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
      console.log(goalList);
      setGoals(goalList);
      setCurrentGoal(goalList[0]);
      console.log(goalList[0]);
      console.log(goals);
    } catch (error) {
      console.error("Error getting documents: ", error);
      alert(error);
    }
  };

  useEffect(() => {
    //scrollToBottom();
    // Example usage
    // checkStatusAndPrintMessages(
    //   "thread_NWXJ1BmVcioMrytGGihRBAvf",
    //   "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    // );
    //getGoalsFirebase();
    // checkStatusAndPrintMessages(
    //   "thread_crJHTa7QROz47WVmcj94DiUf",
    //   "run_gbSGAWlXgKHi2l80yWASBuKe"
    // );
    checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);
  }, [messages]);

  const incrementMsgCount = async () => {
    const usersRef = collection(db, "users");
    const userRefDoc = doc(db, "users", "tshepo");
    try {
      // Fetch the existing document
      const userDoc = await getDoc(userRefDoc);

      if (userDoc.exists()) {
        // Document exists, update the "Voted" field
        await updateDoc(userRefDoc, {
          LastMessage: new Date(),
          MessagesCount: Number(userDoc.data().MessagesCount) + 1,
        });
        //setMessageCount()

        // await setDoc(
        //   userRefDoc,
        //   { CandidateVote: candidateData.id } // Replace 'Voted' with the actual field name in your document
        //   // { merge: true }
        // );

        console.log("Document updated successfully");
        //localStorage.setItem("Voted", true);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  useEffect(() => {
    if (messageCount >= 4) {
      setUpgrade(true);
    }
  }, [messageCount]);

  // useEffect(() => {
  //   //scrollToBottom();
  //   // Example usage
  //   // checkStatusAndPrintMessages(
  //   //   "thread_NWXJ1BmVcioMrytGGihRBAvf",
  //   //   "run_oaWP3GLQzV1lEtLpGtnAYUiE"
  //   // );
  //   //getGoalsFirebase();
  //   // checkStatusAndPrintMessages(
  //   //   "thread_crJHTa7QROz47WVmcj94DiUf",
  //   //   "run_gbSGAWlXgKHi2l80yWASBuKe"
  //   // );
  //   console.log("Current Goal Changed");
  //   checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);
  // }, [currentGoal]);

  useEffect(() => {
    console.log("Current Goal Changed");
    checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);
  }, [currentGoal]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = db.collection("users").doc(userId);
      const userData = (await userRef.get()).data();

      // if (userData) {
      //   const { clickCount, lastReset } = userData;

      //   // Check if 24 hours have passed since the last reset
      //   const currentTime = new Date();
      //   const lastResetTime = lastReset.toDate();
      //   const hoursPassed = Math.abs(currentTime - lastResetTime) / 36e5;

      //   if (hoursPassed >= 24) {
      //     // Reset click count and update last reset timestamp
      //     await userRef.update({
      //       clickCount: 0,
      //       lastReset: firebase.firestore.FieldValue.serverTimestamp(),
      //     });
      //     setClickCount(0);
      //   } else {
      //     setClickCount(clickCount);
      //   }
      // }

      const candidatesCollectionRef = collection(db, "users");
      const q = query(candidatesCollectionRef, where("userID", "==", "tshepo"));

      try {
        const snapshot = await getDoc(q);
        if (snapshot.empty) {
          console.log("No matching user.");
          return;
        }

        const userData = snapshot.data();

        const { MessagesCount, LastReset } = userData;
        //alert(MessagesCount);

        // Check if 24 hours have passed since the last reset
        const currentTime = new Date();
        const lastResetTime = LastReset.toDate();
        const hoursPassed = Math.abs(currentTime - lastResetTime) / 36e5;

        if (hoursPassed >= 24) {
          // Reset click count and update last reset timestamp
          await userRef.update({
            MessageCount: 0,
            LastReset: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setMessageCount(0);
        } else {
          setMessageCount(MessageCount);
        }

        const goalList = [];
        snapshot.forEach((doc) => {
          goalList.push(doc.data());
          console.log(doc.id, "=>", doc.data());
        });
        console.log(goalList);
        setGoals(goalList);
        setCurrentGoal(goalList[0]);
        console.log(goalList[0]);
        console.log(goals);
      } catch (error) {
        console.error("Error getting documents: ", error);
        alert(error);
      }
    };

    fetchUserData();

    scrollToBottom();
    // Example usage
    // checkStatusAndPrintMessages(
    //   "thread_NWXJ1BmVcioMrytGGihRBAvf",
    //   "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    // );
    getGoalsFirebase();
    // Wait for 10 seconds
    setTimeout(function () {
      // Your code to run after 4 seconds
      console.log("Code executed after 4 seconds");
      checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);
    }, 4000);

    // checkStatusAndPrintMessages(
    //   "thread_crJHTa7QROz47WVmcj94DiUf",
    //   "run_gbSGAWlXgKHi2l80yWASBuKe"
    // );
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [msgsLoading]);

  // useEffect(() => {
  //   const cachedData = sessionStorage.getItem("messages");
  //   if (false) {
  //     setMessages(JSON.parse(cachedData));
  //   } else {
  //     // fetchData().then((apiData) => {
  //     //   sessionStorage.setItem("myData", JSON.stringify(apiData));
  //     //   setData(apiData);
  //     // });
  //     // checkStatusAndPrintMessages(
  //     //   "thread_NWXJ1BmVcioMrytGGihRBAvf",
  //     //   "run_oaWP3GLQzV1lEtLpGtnAYUiE"
  //     // );
  //     // checkStatusAndPrintMessages(
  //     //   "thread_crJHTa7QROz47WVmcj94DiUf",
  //     //   "run_gbSGAWlXgKHi2l80yWASBuKe"
  //     // );
  //     checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);
  //   }
  // }, []);

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSave = () => {
    console.log("Journal Entry:", entry);
    // You can add more logic here to save the entry to a database or perform other actions
  };

  const handleInsights = () => {
    console.log("Journal Entry:", entry);
    setInsights(false);
  };

  const handleReflect = () => {
    console.log("Journal Entry: ", entry);
    setInsights(true);
  };
  const sendMsgOpenAi = async () => {
    const message = await openai.beta.threads.messages.create(
      currentGoal.threadID,
      {
        role: "user",
        content: newMessage,
      }
    );

    const run = await openai.beta.threads.runs.create(currentGoal.threadID, {
      // assistant_id: "asst_TuuWO4MxdsPJPgmdgLkXyeUN",asst_L1rmvjtYlVbgGWk89a53CmP3
      assistant_id: currentGoal.assistantID,
      instructions: `You are an assistant designed to help Tshepo with his goal, his goal is : "${
        currentGoal.Title
      }, his goal descripion is = ${
        currentGoal.Descr
      }, he wants to achieve it by ${formatDateToWords(
        currentGoal.Due
      )}, and will reward himself with ${
        currentGoal.Reward
      }", please respond in 280 characters or less`,
    });
    console.log(`run id : ${run.id}`);
    console.log(run);

    // checkStatusAndPrintMessages(
    //   "thread_NWXJ1BmVcioMrytGGihRBAvf",
    //   "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    // );

    // checkStatusAndPrintMessages(
    //   "thread_crJHTa7QROz47WVmcj94DiUf",
    //   "run_gbSGAWlXgKHi2l80yWASBuKe"
    // );
    checkStatusAndPrintMessages(currentGoal.threadID, currentGoal.runID);

    setNewMessage("");
  };
  const sendMessageHandler = async () => {
    setLoading(true);
    sendMsgOpenAi();
    incrementMsgCount();
    scrollToBottom();
  };

  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      scrollToMo();
    }
  };

  const handleNewGoal = () => {
    setNewGoal(!newGoal);
  };

  const changeChat = (goalData) => {
    const title = goalData.Title;

    const foundObject = goals.find((obj) => obj.Title === title);

    if (foundObject) {
      console.log("Found object:", foundObject);
      setCurrentGoal(foundObject);
      console.log("Current object:", currentGoal);
    } else {
      console.log("Object with Title 'hey' not found.");
    }
  };
  return (
    <div style={{ marginLeft: 0, marginRight: 0 }}>
      <div className="w-full mx-auto mt-2 p-2 ">
        <div
          className="fixed left-0 top-0 w-full p-4 bg-white"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Mobile Button */}

          <div onClick={handleNav}>
            {nav ? (
              <AiOutlineClose
                size={20}
                style={{ color: `${textColor}`, zIndex: 9999 }}
              />
            ) : (
              <AiOutlineMenu
                size={20}
                style={{ color: `${textColor}`, zIndex: 1 }}
              />
            )}
          </div>

          {/* Title */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <h2 className="text-xl font-bold mt-2">{currentGoal.Title}</h2>
          </div>

          {/* Placeholder for alignment */}
          <div style={{ width: 20, height: 20, opacity: 0 }}>
            {" "}
            {/* Invisible placeholder to balance the layout */}{" "}
          </div>
        </div>

        {nav ? (
          <>
            <div
              className={
                "z-10 absolute h-full top-0 left-0 bottom-0 flex justify-center lg:w-[40%] sm:w-full md:w-[60%]  bg-gray-100 text-center ease-in duration-300 p-4"
              }
              ref={modRef}
            >
              {/* <div className="bg-green-700 hover:bg-green-500  rounded-full shadow-md absolute bottom-6 right-7">
                <Fab color="primary" onClick={() => {}}>
                  <AddIcon />
                </Fab>
              </div> */}
              <div
                onClick={handleNav}
                className="absolute top-0 right-0 p-6"
                style={{ zIndex: 9999 }}
              >
                {nav ? (
                  <>
                    <AiOutlineClose size={20} style={{ color: "black" }} />
                  </>
                ) : (
                  <>
                    <AiOutlineMenu size={20} style={{ color: "black" }} />
                  </>
                )}
              </div>
              <Stack className="top-0 h-full">
                {newGoal ? (
                  <>
                    <div
                      onClick={handleNewGoal}
                      className="absolute top-0 left-0 p-6"
                      style={{ zIndex: 9999 }}
                    >
                      {/* <IoIosArrowBack size={20} style={{ color: "black" }} /> */}
                      <Button
                        style={{ backgroundColor: "white" }}
                        onClick={handleNewGoal}
                      >
                        back
                      </Button>
                    </div>
                    <h2 className="text-xl text-black font-bold mt-2">
                      New Goal
                    </h2>

                    <GoalForm onAddGoal={() => {}} />
                  </>
                ) : (
                  <>
                    <h2 className="text-xl text-black font-bold mt-2">
                      My Goals
                    </h2>

                    <center className="mb-4">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          "& > *": {
                            m: 1,
                          },
                        }}
                      >
                        <ButtonGroup
                          variant="text"
                          aria-label="Basic button group"
                        >
                          <Button
                            color="error"
                            style={{ backgroundColor: "white" }}
                          >
                            clear chat
                          </Button>
                          <Button
                            variant="text"
                            color="success"
                            onClick={handleNewGoal}
                            style={{ backgroundColor: "white" }}
                          >
                            New Goal
                          </Button>
                          <Button style={{ backgroundColor: "white" }}>
                            Dark Mode
                          </Button>
                        </ButtonGroup>
                      </Box>
                    </center>

                    {goals.map((goalData) => (
                      <button
                        onClick={() => {
                          changeChat(goalData);
                          handleNav();
                        }}
                        className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10"
                      >
                        <div className="flex items-center">
                          <img
                            className="rounded-full items-start flex-shrink-0 mr-3"
                            src="https://startupsmagazine.co.uk/sites/default/files/2022-02/AdobeStock_309443011ed.png"
                            width="32"
                            height="32"
                            alt="Marie Zulfikar"
                          ></img>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              {goalData.Title}
                            </h4>
                            <div className="text-[13px] text-red-700">
                              2 hours left
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}

                    {/* <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
                      <div className="flex items-center">
                        <img
                          className="rounded-full items-start flex-shrink-0 mr-3"
                          src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                          width="32"
                          height="32"
                          alt="Marie Zulfikar"
                        ></img>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">
                            90% for Research Proposal
                          </h4>
                          <div className="text-[13px] text-green-700">
                            23 days left
                          </div>
                        </div>
                      </div>
                    </button> */}
                  </>
                )}
              </Stack>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* <div
          className={
            nav
              ? "z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-red-500 text-center ease-in duration-300"
              : "z-10 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-[50%]] h-screen  text-center ease-in duration-300"
          }
        >
           
        </div> */}
        <hr style={{ marginTop: 8 }} />
        <div
          className="flex flex-col top-40  h-full overflow-y-auto mt-2"
          ref={divRef}
          style={{ marginBottom: 40, marginTop: 40 }}
        >
          {msgsLoading ? (
            <>
              <Skeleton
                variant="rounded"
                style={{ marginBottom: 5 }}
                width={"100%"}
                height={50}
              />
              <Skeleton
                variant="rounded"
                style={{ marginBottom: 5 }}
                width={"100%"}
                height={50}
              />
              <Skeleton
                variant="rounded"
                style={{ marginBottom: 5 }}
                width={"100%"}
                height={50}
              />
              <Skeleton
                variant="rounded"
                style={{ marginBottom: 5 }}
                width={"100%"}
                height={50}
              />
            </>
          ) : (
            <>
              {messages.length === 0 ? (
                <>
                  <div className="bg-white p-2">
                    {/* message from the AI*/}
                    <div className="bg-white border w-90 p-2 rounded-lg">
                      <p className="text-black" style={{ userSelect: "none" }}>
                        please type a message...
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {messages.map((msg) =>
                    msg.role === "user" ? (
                      <>
                        <div className="bg-white p-2">
                          {/* message from the user*/}
                          <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                            <p
                              className="text-black"
                              style={{ userSelect: "none" }}
                            >
                              {msg.content[0] && msg.content[0].text
                                ? msg.content[0].text.value
                                : "Content missing"}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white p-2">
                          {/* message from the AI*/}
                          <div className="bg-white border w-90 p-2 rounded-lg">
                            <p
                              className="text-black"
                              style={{ userSelect: "none" }}
                            >
                              {msg.content[0] ? (
                                msg.content[0].text.value
                              ) : (
                                <ThreeDots
                                  visible={true}
                                  height="20"
                                  width="40"
                                  color="#4fa94d"
                                  radius="9"
                                  ariaLabel="three-dots-loading"
                                  wrapperStyle={{}}
                                  wrapperClass=""
                                />
                              )}
                            </p>
                          </div>
                        </div>
                      </>
                    )
                  )}
                </>
              )}
              {/* <p>hey there</p> */}
            </>
          )}

          <div className="mt-auto"></div>
        </div>
        <div
          className="bg-white-200 w-full p-2 pt-2 rounded-lg  "
          id="reflectSection"
        >
          {loading ? (
            <>
              <Box sx={{ width: "100%", marginBottom: 2 }}>
                <LinearProgress />
              </Box>
            </>
          ) : (
            <></>
          )}
          {/* <label
            style={{ marginBottom: 2 }}
            for="email"
            className="block text-sm  font-medium text-gray-900 dark:text-white"
          >
            How do you feel?
          </label> */}
          {/* <div className="flex items-center w-full">
            <textarea
              className="flex-1 h-22 p-2 mr-2 resize-none rounded border "
              placeholder={"Tell me something..."}
              // placeholder={placeholderText}
              value={newMessage}
              rows={calculateRows(newMessage)}
              onChange={(e) => setNewMessage(e.target.value)}
            />

          
          </div> */}

          <center>
            <div className="bg-white px-4 py-2 fixed w-full bottom-0">
              <div className="flex items-center">
                {upgrade ? (
                  <>
                    <button
                      onClick={handleSubscribe}
                      className="bg-yellow-700 hover:bg-yellow-500 w-full text-white font-medium py-2 px-4 rounded-full"
                    >
                      please upgrade to a subscription or wait 24 hours
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      className="w-full border rounded-full py-2 px-4 mr-2 resize-none"
                      type="text"
                      placeholder="How's your goal going..."
                      // placeholder={placeholderText}
                      value={newMessage}
                      rows={calculateRows(newMessage)}
                      onChange={(e) => setNewMessage(e.target.value)}
                    ></input>
                    <button
                      onClick={sendMessageHandler}
                      className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full"
                    >
                      <SendIcon className="ml-2 mr-2 text-white" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </center>

          {/* <button
            onClick={sendMessageHandler}
            className="bg-blue-500 w-full p-2 rounded-full shadow-md mt-2 mb-2"
          >
             
            <SendIcon className="ml-2 mr-2 text-white" /> 
          </button> */}
        </div>
        {/* <div className="relative">
                  <textarea
                    className="w-full h-80 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
                    value={entry}
                    onChange={handleInputChange}
                    placeholder={placeholderText}
                  ></textarea>
                </div>
                <button
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                  onClick={handleInsights}
                >
                  Insights
                </button> */}
      </div>
    </div>
  );
}

export default ReflectionAssistant;
