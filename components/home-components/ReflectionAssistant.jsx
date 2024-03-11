"use client";
import React, { useState, useEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Fab, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

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

  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");

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
        "thread_l8VaqVxLBVDL61e0tf4LEdxq",
        "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
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
    scrollToBottom();
    // Example usage
    checkStatusAndPrintMessages(
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
    );
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
    // Example usage
    checkStatusAndPrintMessages(
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
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
        "thread_l8VaqVxLBVDL61e0tf4LEdxq",
        "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
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
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      {
        role: "user",
        content: newMessage,
      }
    );

    const run = await openai.beta.threads.runs.create(
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      {
        assistant_id: "asst_1CgeKXC8weUXBFM2opqTHaZD",
        instructions:
          "Please address the user as Tshepo, his goal is to lose 20 pounds of weight, Please have a conversation with the user and answer in a paragraph less than 300 characters",
      }
    );
    console.log(`run id : ${run.id}`);
    console.log(run);

    checkStatusAndPrintMessages(
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
    );

    setNewMessage("");
  };
  const sendMessageHandler = async () => {
    setLoading(true);
    sendMsgOpenAi();
    scrollToBottom();
  };
  return (
    <div style={{ marginLeft: 0, marginRight: 0 }}>
      <div className="w-full mx-auto mt-2 p-2 ">
        <center>
          <h2 className="text-xl font-bold mt-4">Mindful Assitant</h2>
        </center>
        <hr style={{ marginTop: 8 }} />
        <div
          style={{ height: 500 }}
          className="flex flex-col max-h-80 h-80 overflow-y-auto mt-2"
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
          <div className="flex items-center w-full">
            <textarea
              className="flex-1 h-22 p-2 mr-2 resize-none rounded border "
              placeholder={placeholderText}
              value={newMessage}
              rows={calculateRows(newMessage)}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            {/* <div className="bg-green-700 hover:bg-green-500 z-0 rounded-full shadow-md">
                    <Fab color="success" size="medium">
                      <SendIcon />
                    </Fab>
                  </div> */}
          </div>

          <button
            onClick={sendMessageHandler}
            className="bg-blue-500 w-full p-2 rounded-full shadow-md mt-2 mb-2"
          >
            {/* <Fab
              color="primary"
              className="w-full"
              variant="extended"
              // onClick={() => {
              //   toggleModal("New Goal");

              // }}
              onClick={sendMessageHandler}
            ></Fab> */}
            <SendIcon className="ml-2 mr-2 text-white" />
            {/* <p className="text-white">send message</p> */}
          </button>

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
