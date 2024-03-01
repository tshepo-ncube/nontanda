// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./Navbar";
// GoalView component
const GoalView = () => {
  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");

  // Calculate the number of rows based on the length of the text
  const calculateRows = (text) => {
    const newLines = (text.match(/\n/g) || []).length + 1;
    const rows = Math.min(5, newLines + 1); // Limit to 5 rows
    return rows;
  };
  const [timeLeft, setTimeLeft] = useState(12345674323);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  // Format seconds into DD:HH:MM:SS
  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };
  return (
    <div className="flex flex-col items-center h-auto w-85 max-w-screen-lg mx-auto overflow-y-auto">
      {/* Medium Text */}
      <Navbar2 title={" I want to have a consistent routine"} />
      {/* <div>
        <p>Time Remaining: {formatTime(timeLeft)}</p>
      </div> */}
      <div style={{ marginTop: 20 }}>
        <div className="bg-blue-200 w-full p-4 rounded-lg mb-4">
          <p className="text-black">
            I want to be consistent in my routine. This includes, sleeping on
            time. Eating on time, working from 8am to 6pm
          </p>
        </div>
        {/* 
        <div className="bg-green-200 w-full p-4 rounded-lg mb-4 border">
          <Typography component="legend" variant="h6">
            How close are you to your goal?
          </Typography>

          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div> */}

        <div className="bg-white-200 w-full p-2 pt-2 rounded-lg mb-4 border">
          {/* <Typography component="legend" variant="h6">
          Did you wake up early today?
        </Typography> */}

          <div class="flex flex-col">
            <div className="bg-white p-4">
              {/* prompts from the AI*/}
              <div>
                <div
                  className={`max-w-2/3 p-2 mb-2 ml-4 rounded-lg bg-green-500 text-white float-left`}
                >
                  Did you wake up early today?
                </div>
                <div
                  className={`max-w-2/3 p-2 mb-2 ml-4 rounded-lg bg-green-500 text-white float-left`}
                >
                  How did you prioritize and manage your time?
                </div>
                <div
                  className={`max-w-2/3 p-2 mb-2 ml-4 rounded-lg bg-green-500 text-white float-left`}
                >
                  What challenges did you face in keeping a consitent routine?
                </div>
              </div>
            </div>

            <div className="bg-white p-2">
              {/* message from the AI*/}
              <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                <p className="text-black">
                  I feel good about myself, I am fostering a reslient mindset, I
                  am trying to be more reslient
                </p>
                {/* <div className="mt-auto">
                  <IconButton color="primary">
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <ThumbDownIcon />
                  </IconButton>
                </div> */}
              </div>
            </div>
            <div className="bg-white p-2">
              {/* message from the AI*/}
              <div className="bg-white border w-90 p-2 rounded-lg">
                <p className="text-black">
                  Fostering a resilient mindset, embracing positivity, and
                  prioritizing mental well-being for a healthier, happier, and
                  more fulfilling life journey. How are you going to make sure
                  you remain reslient?
                </p>
                <div className="mt-auto">
                  <IconButton color="blue" style={{ color: "green" }}>
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton color="white">
                    <ThumbDownIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div className="flex bg-green-200 flex-col justify-between px-6 py-4 h-full">
            <div className="flex flex-col">
              <div className="text-xl mb-2">
                I want to be consistent in my routine. This includes, sleeping
                on time. Eating on time, working from 8am to 6pm
              </div>
            
            </div>
            <div className="mt-auto">
              <ThumbUpIcon /> <ThumbDownIcon />
            </div>
          </div> */}

          <div className="flex items-center p-4 w-full">
            <textarea
              className="flex-1 p-2 mr-2  rounded border "
              placeholder="What's on your mind..."
              value={newMessage}
              rows={calculateRows(newMessage)}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            <div className="bg-green-700 hover:bg-green-500  rounded-full shadow-md">
              <Fab color="success" size="medium">
                <SendIcon />
              </Fab>
            </div>
          </div>

          <center>
            <Button
              color="success"
              variant="text"
              style={{ backgroundColor: "white" }}
            >
              New Reflection
            </Button>
            <Button variant="text" style={{ backgroundColor: "white" }}>
              Reflection On A New Goal
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
};

const Navbar2 = ({ title }) => {
  return (
    <nav className="z-14 bg-white p-4 fixed top-0 w-full flex justify-center items-center">
      <center>
        <div
          className="text-black text-3xl  font-bold pt-4"
          style={{ fontSize: 21 }}
        >
          <h1>{title}</h1>
        </div>
      </center>
    </nav>
  );
};

export default GoalView;
