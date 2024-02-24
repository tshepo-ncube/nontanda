"use client";
import React, { useState } from "react";
import GoalForm from "./GoalForm";
import GoalView from "./GoalView";
const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("New Goal");

  const toggleModal = (modalType) => {
    setIsOpen(!isOpen);
    setModalType("New Goal");
  };
  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Goal Tracker</h1>

      <List toggleModal={toggleModal} />

      <button
        onClick={() => {
          toggleModal("New Goal");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md fixed bottom-12 right-7"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-white ">
            <div style={{ padding: 70 }}>
              {modalType === "New Goal" ? (
                <>
                  <GoalForm />
                </>
              ) : (
                <>
                  <GoalView />
                </>
              )}
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

const Card = ({ recipientName, senderName, toggleModal }) => {
  return (
    <div
      onClick={() => {
        toggleModal("GoalView");
      }}
      className="block max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white cursor-pointer"
    >
      {/* <img
        className="w-full"
        src="landscape-image.jpg"
        alt="Serene Landscape"
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipientName}</div>
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

const List = ({ toggleModal }) => {
  // Sample data for demonstration
  const cardData = [
    { id: 1, recipientName: "I want to learn mandarin", senderName: "Bob" },
    {
      id: 2,
      recipientName: "I want to have a consistent routine",
      senderName: "Dave",
    },
    // { id: 3, recipientName: "Eve", senderName: "Frank" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            recipientName={card.recipientName}
            senderName={card.senderName}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </>
  );
};
