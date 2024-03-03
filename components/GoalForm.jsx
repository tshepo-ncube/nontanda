"use client";
import React, { useState, useEffect } from "react";
import ModalNavbar from "./ModalNavbar";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
const GoalForm = ({ onAddGoal }) => {
  const [initialDate, setInitialDate] = useState("");

  const [goal, setGoal] = useState({
    text: "",
    timeline: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value,
    }));
  };

  const handleAddGoal = () => {
    onAddGoal(goal);
    setGoal({
      text: "",
      timeline: "",
      description: "",
    });
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
      <ModalNavbar title={"Create A New Goal"} />
      <form style={{ marginTop: 60, padding: 10 }}>
        <label className="block text-sm font-semibold mb-2">
          Goal Name:
          <input
            type="text"
            name="text"
            placeholder="I want to lose 30 pounds within the next six months to improve my overall health and well-being."
            value={goal.text}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            required
          />
        </label>
        {/* <label className="block text-sm font-semibold mb-2">
          Deadline:
          <input
            type="date"
            name="timeline"
            value={goal.timeline}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            required
          />
        </label> */}

        <label className="block text-sm font-semibold mb-2">
          When do you want to achieve this goal:
        </label>
        <br />
        <input
          type="date"
          name="timeline"
          value={initialDate}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mb-2"
          required
        />

        <label className="block text-sm font-semibold mb-2">
          Description:
          <textarea
            name="description"
            placeholder="Tell me more about your goal, HOW you aim to achieve it and WHY you want to achieve it!"
            value={goal.description}
            required
            onChange={handleChange}
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
          required
        ></input>

        <Fab
          color="primary"
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
