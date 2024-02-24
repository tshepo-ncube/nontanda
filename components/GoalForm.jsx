"use client";
import React, { useState } from "react";

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
      <h1>Add a goal.</h1>
      <label className="block text-sm font-semibold mb-2">
        Goal:
        <input
          type="text"
          name="text"
          value={goal.text}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </label>
      <label className="block text-sm font-semibold mb-2">
        Timeline:
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
          value={goal.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </label>
      <button
        onClick={handleAddGoal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Goal
      </button>
    </div>
  );
};

export default GoalForm;
