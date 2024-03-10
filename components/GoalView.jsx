// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./Navbar";
import ModalNavbar from "./ModalNavbar";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// GoalView component
const GoalView = () => {
  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [placeholderText, setPlaceholderText] = useState(
    "In what ways have my habits contributed to or hindered my progress?"
  );
  const placeholderOptions = [
    "Are there any patterns or trends in your behavior that I've noticed?",
    "Have your priorities or values shifted during this process?",
    "How has your mindset evolved since you set this goal?",
    "What strengths or skills have you discovered or developed along the way?",
    "What challenges did you face today, how did you overcome them?",
    "What have you learned about yourself during this journey?",
    "How are you going to approach this goal moving forward?",
  ];
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

  return (
    <div className="flex flex-col items-center h-auto w-85 max-w-screen-lg mx-auto overflow-y-auto">
      <ModalNavbar title={" I want to have a consistent routine"} />

      <div style={{ marginTop: 5, userSelect: "none" }}>
        <div className="bg-blue-200 w-full p-4 rounded-lg mb-4">
          <p className="text-black">
            I want to be consistent in my routine. This includes, sleeping on
            time. Eating on time, working from 8am to 6pm
          </p>
        </div>

        <center>
          <Button variant="text" onClick={handleOpen}>
            view progress
          </Button>
        </center>

        <div className="bg-white-200 w-full p-2 pt-2 rounded-lg mb-4 border">
          <div class="flex flex-col">
            {/* <div className="bg-white p-2">
              <div className="bg-white p-2">
                <div className="bg-white border w-90 p-2 rounded-lg"></div>
              </div>
            </div> */}

            <div className="bg-white p-2">
              {/* message from the user*/}
              <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                <p className="text-black" style={{ userSelect: "none" }}>
                  Reaching 1000 users on my app is more than just hitting a
                  number; it's about creating something that genuinely resonates
                  with people. This goal pushes me to dive deep into
                  understanding what users truly need and how my app can make a
                  difference in their lives. Every new user is a validation of
                  the hard work and passion I've poured into this project. It's
                  not just about marketing strategies or features; it's about
                  building connections and trust. As I move closer to this
                  milestone, I'm reminded that success is a blend of
                  persistence, innovation, and the ability to listen and adapt.
                  Each user's feedback is a golden opportunity for improvement,
                  making the journey towards 1000 users a deeply enriching
                  experience that goes beyond numbers.
                </p>
              </div>
            </div>

            <div className="bg-white p-2">
              {/* message from the AI*/}
              <div className="bg-white border w-90 p-2 rounded-lg">
                <p className="text-black" style={{ userSelect: "none" }}>
                  As I move closer to this milestone, I'm reminded that success
                  is a blend of persistence, innovation, and the ability to
                  listen and adapt. Each user's feedback is a golden opportunity
                  for improvement, making the journey towards 1000 users a
                  deeply enriching experience that goes beyond numbers.
                </p>
              </div>
            </div>

            <center>
              <div className="flex items-center w-full">
                <textarea
                  className="flex-1 h-22 p-2 mr-2 resize-none rounded border "
                  placeholder={placeholderText}
                  value={newMessage}
                  rows={calculateRows(newMessage)}
                  onChange={(e) => setNewMessage(e.target.value)}
                  readOnly
                />

                {/* <div className="bg-green-700 hover:bg-green-500 z-0 rounded-full shadow-md">
                    <Fab color="success" size="medium">
                      <SendIcon />
                    </Fab>
                  </div> */}
              </div>
              <button className="mt-2 text-black font-bold bg-yellow-400 w-full hover:bg-yellow-600 p-2 rounded-full shadow-md">
                subscribe to respond
              </button>
            </center>

            {/* <div>
              <center>
                <label
                  style={{ marginBottom: -10 }}
                  for="email"
                  className=" block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reflect on your journey
                </label>
              </center>
              <div className="flex items-center p-[1.5] mt-4 mb-2 w-full">
                <textarea
                  className="flex-1 p-2 h-80 max-h-120 rounded border "
                  placeholder={placeholderText}
                  value={newMessage}
                  rows={calculateRows(newMessage)}
                  onChange={(e) => setNewMessage(e.target.value)}
                />

                
              </div>
              <button className="bg-green-700 w-full hover:bg-green-500 p-2 rounded-full shadow-md">
             

                <AddIcon className="justify-center items-center ml-2 mr-2 text-white" />
              </button>
            </div> */}

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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default GoalView;
