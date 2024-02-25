// Import necessary dependencies
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// GoalView component
const GoalView = () => {
  const [value, setValue] = React.useState(2);
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
      <div className="bg-green-100 w-full p-4 rounded-lg mb-4">
        <p className="text-black">
          I want to be consistent in my routine. This includes, sleeping on
          time. Eating on time, working from 8am to 6pm
        </p>
      </div>

      <div className="bg-green-100 w-full p-2 rounded-lg mb-4">
        <Typography component="legend">Did you wake up early today?</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      {/* Label and Textarea */}
      <label className="w-full block text-sm font-semibold mb-2">
        Journal:
        <textarea
          name="description"
          style={{ height: 170 }}
          className="w-full h-70 mt-2 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
        />
      </label>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Journal
      </button>
    </div>
  );
};

export default GoalView;
