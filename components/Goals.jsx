"use client";
import React, { useState } from "react";
import GoalForm from "./GoalForm";
const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Goal Tracker</h1>
      {/* <div className="bg-white p-6 rounded-md shadow-md">
        <GoalForm onAddGoal={handleAddGoal} />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Goals:</h2>
        <ul className="list-disc pl-4">
          {goals.map((goal, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{goal.text}</span> - {goal.timeline} -{" "}
              {goal.description}
            </li>
          ))}
        </ul>
      </div> */}

      <List />

      <button
        onClick={toggleModal}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md fixed bottom-12 right-7"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-white ">
            <div style={{ padding: 70 }}>
              <GoalForm />
            </div>
          </div>

          <div className="bg-black p-8 rounded shadow-md w-1/2">
            <button
              onClick={toggleModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-white-500 hover:text-white-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGoals;

//import React from "react";

const Card = ({ recipientName, senderName }) => {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white">
      {/* <img
        className="w-full"
        src="landscape-image.jpg"
        alt="Serene Landscape"
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Goal Name: {recipientName},
        </div>
        <p className="text-gray-700 text-base">date</p>
        {/* <p className="text-gray-700 text-base">
          Descr No matter where life takes us, please know that you are
          cherished and valued beyond measure. Your strength, resilience, and
          compassion inspire me every day, and I am grateful to have you in my
          life.
        </p> */}
        {/* <div className="font-bold text-xl mb-2 mt-4">
          With love and appreciation,
        </div> */}
        <div className="font-semibold text-lg">{senderName}</div>
      </div>
    </div>
  );
};

//export default Card;

const List = () => {
  // Sample data for demonstration
  const cardData = [
    { id: 1, recipientName: "Alice", senderName: "Bob" },
    { id: 2, recipientName: "Charlie", senderName: "Dave" },
    { id: 3, recipientName: "Eve", senderName: "Frank" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            recipientName={card.recipientName}
            senderName={card.senderName}
          />
        ))}
      </div>
    </>
  );
};
