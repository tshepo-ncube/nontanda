"use client";
import React, { useState, useEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Fab, Button } from "@mui/material";
import Box from "@mui/material/Box";

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

function ReflectionAssistant() {
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
  const [msgsLoading, setMsgsLoading] = useState(true);
  const divRef = useRef(null);
  const sendBtnRef = useRef(null);

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
    msgList.forEach((msg) => {
      const role = msg.role;
      // Ensure that msg.content[0] and msg.content[0].text exist before trying to access .value
      const content =
        msg.content[0] && msg.content[0].text
          ? msg.content[0].text.value
          : "Content missing";
      console.log(
        `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
      );
      console.log("\n");
    });
    let length = msgList.length;
    if (msgList[length - 1].role !== "user") {
      console.log("loading........");
      checkStatusAndPrintMessages(
        "thread_NWXJ1BmVcioMrytGGihRBAvf",
        "run_oaWP3GLQzV1lEtLpGtnAYUiE"
      );
    } else {
      setLoading(false);
    }
    setMsgsLoading(false);
  };

  // Step 2: Scroll function
  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderText(
        placeholderOptions[
          Math.floor(Math.random() * placeholderOptions.length)
        ]
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //scrollToBottom();
    // Example usage
    checkStatusAndPrintMessages(
      "thread_NWXJ1BmVcioMrytGGihRBAvf",
      "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    );
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
    // Example usage
    checkStatusAndPrintMessages(
      "thread_NWXJ1BmVcioMrytGGihRBAvf",
      "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    );
  }, []);

  useEffect(() => {
    const cachedData = sessionStorage.getItem("messages");
    if (false) {
      setMessages(JSON.parse(cachedData));
    } else {
      // fetchData().then((apiData) => {
      //   sessionStorage.setItem("myData", JSON.stringify(apiData));
      //   setData(apiData);
      // });
      checkStatusAndPrintMessages(
        "thread_NWXJ1BmVcioMrytGGihRBAvf",
        "run_oaWP3GLQzV1lEtLpGtnAYUiE"
      );
    }
  }, []);

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
    console.log("Journal Entry:", entry);
    setInsights(true);
  };
  const sendMsgOpenAi = async () => {
    const message = await openai.beta.threads.messages.create(
      "thread_NWXJ1BmVcioMrytGGihRBAvf",
      {
        role: "user",
        content: newMessage,
      }
    );

    const run = await openai.beta.threads.runs.create(
      "thread_NWXJ1BmVcioMrytGGihRBAvf",
      {
        assistant_id: "asst_TuuWO4MxdsPJPgmdgLkXyeUN",
        instructions:
          "Please address the user as Tshepo, his goal is to lose 20 pounds of weight, Please have a conversation with the user and answer in a paragraph less than 300 characters",
      }
    );
    console.log(`run id : ${run.id}`);
    console.log(run);

    checkStatusAndPrintMessages(
      "thread_NWXJ1BmVcioMrytGGihRBAvf",
      "run_oaWP3GLQzV1lEtLpGtnAYUiE"
    );

    setNewMessage("");
  };
  const sendMessageHandler = async () => {
    setLoading(true);
    sendMsgOpenAi();
    scrollToBottom();
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div style={{ marginLeft: 0, marginRight: 0 }}>
      <div className="w-full mx-auto mt-2 p-2 ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Mobile Button */}
          <div onClick={handleNav} style={{ zIndex: 9999 }}>
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>

          {/* Title */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <h2 className="text-xl font-bold mt-2">Goal Assistant</h2>
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
                "z-10 absolute top-0 left-0 bottom-0 flex justify-center lg:w-[40%] sm:w-full md:w-full h-screen bg-gray-100 text-center ease-in duration-300 p-4"
              }
            >
              <div className="bg-green-700 hover:bg-green-500  rounded-full shadow-md absolute bottom-6 right-7">
                <Fab color="primary" onClick={() => {}}>
                  <AddIcon />
                </Fab>
              </div>
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
              <Stack className="top-0">
                <h2 className="text-xl text-black font-bold mt-2 mb-6">
                  My Goals
                </h2>

                <center>
                  <Button
                    color="success"
                    variant="text"
                    style={{ backgroundColor: "white" }}
                  >
                    clear chat
                  </Button>

                  <Link href="/goals" target="_blank">
                    <Button variant="text" style={{ backgroundColor: "white" }}>
                      Reflect On A New Goal
                    </Button>
                  </Link>
                </center>

                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
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
                        Keto diet
                      </h4>
                      <div className="text-[13px] text-red-700">
                        2 hours left
                      </div>
                    </div>
                  </div>
                </button>

                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
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
                </button>

                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
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
                </button>

                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
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
                </button>

                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 bg-white border rounded mb-2 p-10">
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
                        Marie Zulfikar
                      </h4>
                      <div className="text-[13px]">
                        The video chat ended · 2hrs
                      </div>
                    </div>
                  </div>
                </button>

                {/* <>
                  <a className="xl:w-full sm:w-full lg:w-full w-full  md:w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      className="object-cover w-full rounded-t-lg h-120 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    ></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Goal Name here Goal Name here Goal Name here
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        23 days left
                      </p>{" "}
                      <div className="w-40 px-2 text-xs group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center h-8 justify-center">
                        <span> 23 March 2022</span>
                      </div>
                    </div>
                  </a>
                </> */}

                {/* <div
                  onClick={() => {}}
                  className="block max-w-md h-200 mx-100 rounded overflow-hidden shadow-lg border bg-white-100 cursor-pointer"
                >
                  <img
                    className="w-full h-40"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Serene Landscape"
                  />

                  <div className="flex flex-col justify-between px-6 py-4 h-200 bg-white">
                    <div className="text-green-500 mb-2 text-sm">
                      Reflected 2 days ago
                    </div>
                    <div className="mt-auto mb-2">
                      <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-xl mb-2">
                        {"hey there"}
                      </div>
                   
                    </div>
                  </div>
                </div> */}
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
          style={{ height: 500 }}
          className="flex flex-col   h-screen overflow-y-auto mt-2"
          ref={divRef}
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

          <div className="bg-white px-4 py-2 fixed w-full bottom-5">
            <div className="flex items-center">
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
            </div>
          </div>

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
