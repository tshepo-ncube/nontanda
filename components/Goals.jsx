"use client";
import React, { useState } from "react";
import GoalForm from "./GoalForm";
import Fab from "@mui/material/Fab";
import GoalView from "./GoalView";
//import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import SendIcon from "@mui/icons-material/Send";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("New Goal");

  const toggleModal = (modalType) => {
    setIsOpen(!isOpen);
    setModalType(modalType);
  };
  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Goal Tracker</h1>

      <List toggleModal={toggleModal} />

      <div className="bg-blue-700 hover:bg-blue-500  rounded-full shadow-md fixed bottom-12 right-7">
        <Fab
          color="primary"
          variant="extended"
          onClick={() => {
            toggleModal("New Goal");
          }}
        >
          new goal
        </Fab>
      </div>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-white ">
            <div
              style={{ maxHeight: "100%", overflowY: "auto", padding: "20px" }}
            >
              {modalType === "New Goal" ? (
                <div style={{ marginTop: 60 }}>
                  <GoalForm />
                </div>
              ) : (
                <div style={{ marginTop: 60 }}>
                  <GoalView />
                </div>
              )}
            </div>
          </div>

          <div className="bg-black p-8 rounded shadow-md w-1/2 ml-2 mr-2">
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

const Card = ({ recipientName, senderName, toggleModal }) => {
  return (
    <div
      onClick={() => {
        toggleModal("GoalView");
      }}
      className="block max-w-md mx-100 rounded overflow-hidden shadow-lg border bg-white-100 cursor-pointer"
    >
      {/* <img
        className="w-full"
        src="landscape-image.jpg"
        alt="Serene Landscape"
      /> */}

      <div className="flex flex-col justify-between px-6 py-4 h-full">
        <div className="flex flex-col">
          <div className="font-bold text-xl mb-2">{recipientName}</div>
          {/* Other content goes here */}
        </div>
        <div className="mt-auto">
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
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
    {
      id: 3,
      recipientName: "I want to achieve a 90% for my research proposal",
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
