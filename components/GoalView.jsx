// Import necessary dependencies
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
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
  return (
    <div className="flex flex-col items-center h-auto w-85 max-w-screen-lg mx-auto overflow-y-auto">
      {/* Medium Text */}
      <center>
        <h2 className="text-3xl font-medium mb-4">
          I want to have a consistent routine
        </h2>
        {/* <Typography component="legend">Progress</Typography> */}
        <Rating name="read-only" value={value} readOnly />
      </center>

      {/* Text with green background */}
      <div className="bg-green-300 w-full p-4 rounded-lg mb-4">
        <p className="text-black">
          I want to be consistent in my routine. This includes, sleeping on
          time. Eating on time, working from 8am to 6pm
        </p>
      </div>

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
      </div>

      <div className="bg-blue-200 w-full p-4 rounded-lg mb-4 border">
        {/* <Typography component="legend" variant="h6">
          Did you wake up early today?
        </Typography> */}
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
        {/* <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> */}

        <div className="flex items-center p-4 w-full">
          <textarea
            className="flex-1 p-2 mr-2  rounded border border-black"
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
      </div>

      {/* Label and Textarea */}
      {/* <label className="w-full block text-sm font-semibold mb-2">
        Journal:
        <textarea
          name="description"
          style={{ height: 170 }}
          className="w-full h-70 mt-2 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
        />
      </label>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Journal
      </button> */}

      {/* <div className="flex items-center p-4 bg-white w-full">
        <textarea
          className="flex-1 p-2 mr-2 border rounded"
          placeholder="Type your message..."
          value={newMessage}
          rows={calculateRows(newMessage)}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        <div className="bg-blue-700 hover:bg-blue-500  rounded-full shadow-md">
          <Fab color="primary" variant="extended">
            Send
          </Fab>
        </div>
      </div> */}
    </div>
  );
};

export default GoalView;
