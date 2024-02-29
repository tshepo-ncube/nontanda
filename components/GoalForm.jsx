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
      <Navbar2 title={"Create A New Goal"} />
      <div style={{ marginTop: 60 }}>
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
    </div>
  );
};

const Navbar2 = ({ title }) => {
  return (
    <nav className="z-14 bg-white p-4 fixed top-0 w-full flex justify-center items-center">
      <center>
        <div
          className="text-black text-3xl  font-bold"
          style={{ fontSize: 21 }}
        >
          <h1>{title}</h1>
        </div>
      </center>
    </nav>
  );
};

export default GoalForm;
