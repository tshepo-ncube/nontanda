"use client";
import React, { useState } from "react";
import ModalNavbar from "./ModalNavbar";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
const GoalForm = ({ onAddGoal }) => {
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
  return (
    <div style={{ marginTop: 10 }}>
      <ModalNavbar title={"Create A New Goal"} />
      <div style={{ marginTop: 60, padding: 10 }}>
        <label className="block text-sm font-semibold mb-2">
          Goal Name:
          <input
            type="text"
            name="text"
            placeholder="I want to lose 30 pounds of weight"
            value={goal.text}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </label>
        <label className="block text-sm font-semibold mb-2">
          Deadline:
          <input
            type="date"
            name="timeline"
            value={goal.timeline}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </label>
        <label className="block text-sm font-semibold mb-2">
          Description:
          <textarea
            name="description"
            placeholder="Tell me more about your goal, including how you aim to achieve it!"
            value={goal.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </label>

        <Fab
          color="primary"
          size="medium"
          className="bg-green-600 hover:bg-green-500 z-0 "
          variant="extended"
          onClick={handleAddGoal}
        >
          <AddIcon />
          Add Goal
        </Fab>
      </div>
    </div>
  );
};

export default GoalForm;
