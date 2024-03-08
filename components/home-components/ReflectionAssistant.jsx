import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { Fab, Button } from "@mui/material";
import Box from "@mui/material/Box";
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
function ReflectionAssistant() {
  const [entry, setEntry] = useState("");
  const [insights, setInsights] = useState(true);
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

  const [messages, setMessages] = useState([
    {
      message:
        " I feel good about myself, I am fostering a reslient mindset, I am trying to be more reslient",
      role: "user",
    },
    {
      message:
        "  Fostering a resilient mindset, embracing positivity, and prioritizing mental well-being for a healthier, happier, and more fulfilling life journey. How are you going to make sure you remain reslient?",
      role: "assistant",
    },
  ]);

  const divRef = useRef(null);

  // Step 2: Scroll function
  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

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
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-2 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Reflection Assitant</h2>
        <div class="flex flex-col max-h-80 overflow-y-auto" ref={divRef}>
          <div className="bg-white p-2">
            {/* message from the user*/}
            <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
              <p className="text-black" style={{ userSelect: "none" }}>
                I feel good about myself, I am fostering a reslient mindset, I
                am trying to be more reslient
              </p>
            </div>
          </div>
          <div className="bg-white p-2">
            {/* message from the AI*/}
            <div className="bg-white border w-90 p-2 rounded-lg">
              <p className="text-black" style={{ userSelect: "none" }}>
                Fostering a resilient mindset, embracing positivity, and
                prioritizing mental well-being for a healthier, happier, and
                more fulfilling life journey. How are you going to make sure you
                remain reslient?
              </p>
            </div>
          </div>

          {messages.map((msg) =>
            msg.role === "user" ? (
              <>
                <div className="bg-white p-2">
                  {/* message from the user*/}
                  <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-2">
                  {/* message from the AI*/}
                  <div className="bg-white border w-90 p-2 rounded-lg">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            )
          )}

          {messages.map((msg) =>
            msg.role === "user" ? (
              <>
                <div className="bg-white p-2">
                  {/* message from the user*/}
                  <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-2">
                  {/* message from the AI*/}
                  <div className="bg-white border w-90 p-2 rounded-lg">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            )
          )}

          {messages.map((msg) =>
            msg.role === "user" ? (
              <>
                <div className="bg-white p-2">
                  {/* message from the user*/}
                  <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-2">
                  {/* message from the AI*/}
                  <div className="bg-white border w-90 p-2 rounded-lg">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            )
          )}

          {messages.map((msg) =>
            msg.role === "user" ? (
              <>
                <div className="bg-white p-2">
                  {/* message from the user*/}
                  <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-2">
                  {/* message from the AI*/}
                  <div className="bg-white border w-90 p-2 rounded-lg">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            )
          )}

          {messages.map((msg) =>
            msg.role === "user" ? (
              <>
                <div className="bg-white p-2">
                  {/* message from the user*/}
                  <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-2">
                  {/* message from the AI*/}
                  <div className="bg-white border w-90 p-2 rounded-lg">
                    <p className="text-black" style={{ userSelect: "none" }}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </>
            )
          )}

          <div className="mt-auto">
            <IconButton color="blue" style={{ color: "green" }}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton color="white">
              <ThumbDownIcon />
            </IconButton>
          </div>
        </div>
        <div
          className="bg-white-200 w-full p-2 pt-2 rounded-lg  "
          id="reflectSection"
        >
          <label
            style={{ marginBottom: 2 }}
            for="email"
            className="block text-sm  font-medium text-gray-900 dark:text-white"
          >
            How do you feel?
          </label>
          <div className="flex items-center w-full">
            <textarea
              className="flex-1 h-40 p-2 mr-2 resize-none rounded border "
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

          <div className="bg-blue-500 rounded-full shadow-md mt-2 mb-2">
            <Fab
              color="primary"
              className="w-full"
              variant="extended"
              // onClick={() => {
              //   toggleModal("New Goal");

              // }}
              onClick={scrollToBottom}
            >
              <SendIcon className="ml-2 mr-2" />
              send message
            </Fab>
          </div>

          <center>
            <Button
              color="success"
              variant="text"
              style={{ backgroundColor: "white" }}
            >
              clear chat
            </Button>
            <Button variant="text" style={{ backgroundColor: "white" }}>
              Reflect On A New Goal
            </Button>
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
