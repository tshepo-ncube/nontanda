"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Fab, Button } from "@mui/material";
import ReflectionComponent from "./Explaination";
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

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [insights, setInsights] = useState(true);
  const [placeholderText, setPlaceholderText] = useState(
    "Lately, I feel like I'm drifting apart from the people I care about most, and it's leaving me feeling lonely and disconnected..."
  );
  const placeholderOptions = [
    "I'm feeling overwhelmed by the constant pressure to perform at work, and it's draining me both mentally and emotionally...",
    "The thought of my upcoming exam is like a dark cloud looming over me, causing my stomach to churn with anxiety every time I think about it...",
    "I can't seem to shake this feeling of dissatisfaction with my appearance, and it's taking a toll on my self-confidence and overall well-being...",
    "My relationships feel strained and distant lately, and I can't help but wonder if I'm failing as a friend/partner/family member...",
    "Every day feels like a battle to keep my head above water, and I'm exhausted from trying to juggle all of life's demands...",
    "The future feels uncertain and daunting, and I'm struggling to find a sense of direction or purpose in my life...",
    "No matter how hard I try to stay positive, negative thoughts and self-doubt keep creeping in, making it difficult to see a way out of this rut...",
  ];

  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");

  // Calculate the number of rows based on the length of the text
  const calculateRows = (text) => {
    const newLines = (text.match(/\n/g) || []).length + 1;
    const rows = Math.min(5, newLines + 1); // Limit to 5 rows
    return rows;
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

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSave = () => {
    console.log("Journal Entry:", entry);
    // You can add more logic here to save the entry to a database or perform other actions
  };

  const handleInsights = () => {
    console.log("Journal Entry:", entry);
    setInsights(false);
  };

  const handleReflect = () => {
    console.log("Journal Entry:", entry);
    setInsights(true);
  };

  return (
    <>
      {" "}
      <div className="bg-white-100 p-18 mt-2">
        <div className="container mx-auto text-center">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">Who We Are</h2> */}
          <p className="text-gray-600 leading-loose mb-8">
            Reflection is a powerful tool for personal growth and development,
            offering individuals the opportunity to delve inward and gain
            profound insights into their thoughts, emotions, and actions.
            Through reflection, individuals can engage in a deliberate and
            introspective process of examining past experiences, contemplating
            their significance, and discerning valuable lessons learned.
          </p>
          {/* <p className="text-gray-600 leading-loose">
            Moreover, reflection facilitates effective problem-solving and
            decision-making by encouraging individuals to critically evaluate
            various perspectives and consider alternative courses of action.
            Beyond personal growth, reflection fosters empathy, enhances
            emotional regulation, and strengthens relationships by promoting
            understanding and communication. Ultimately, the practice of
            reflection empowers individuals to navigate life's challenges with
            resilience, cultivate a growth mindset, and pursue continuous
            self-improvement.
          </p> */}
        </div>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {insights ? (
            <>
              <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">What's on your mind?</h2>
                <div className="bg-white-200 w-full p-2 pt-4 rounded-lg mb-4 ">
                  <div className="flex items-center p-4 w-full">
                    <textarea
                      className="flex-1 h-40 p-2 mr-2 resize-none rounded border "
                      placeholder={placeholderText}
                      value={newMessage}
                      rows={calculateRows(newMessage)}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />

                    <div className="bg-green-700 hover:bg-green-500 z-0 rounded-full shadow-md">
                      <Fab color="success" size="medium">
                        <SendIcon />
                      </Fab>
                    </div>
                  </div>

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
                {/* <div className="relative">
                  <textarea
                    className="w-full h-80 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
                    value={entry}
                    onChange={handleInputChange}
                    placeholder={placeholderText}
                  ></textarea>
                </div>
                <button
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                  onClick={handleInsights}
                >
                  Insights
                </button> */}
              </div>
            </>
          ) : (
            <>
              <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Insight.</h2>
                <div className="relative">
                  <div className="w-full mx-auto p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300">
                    <p>
                      It sounds like you've been grappling with a heavy burden
                      of self-doubt and questioning your worthiness in your
                      relationships, despite the love and support you receive.
                      The lingering doubts and insecurities seem to overshadow
                      even your happiest moments, casting a shadow over your
                      experiences. It's important to recognize that these
                      feelings are valid, but they don't define your worth or
                      deservingness of happiness. Perhaps exploring these doubts
                      with compassion and seeking validation from within can
                      help you cultivate a deeper sense of self-acceptance and
                      find peace within your relationships. Remember, you are
                      deserving of love and happiness, and your worthiness
                      doesn't hinge on external validation.
                    </p>
                  </div>
                  {/* <div className="absolute top-2 left-2 text-gray-400 overflow-hidden whitespace-nowrap">
          {placeholderText}
        </div> */}
                </div>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                  onClick={handleReflect}
                >
                  Reflect
                </button>
              </div>
            </>
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          {/* <ReflectionComponent /> */}
          <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Benefits of Reflection</h2>
            <ul className="list-disc pl-4">
              <li className="mb-4">
                Self-Awareness: Reflecting helps individuals become more aware
                of their emotions, beliefs, and values.
              </li>
              <li className="mb-4">
                Personal Growth: It allows individuals to learn from experiences
                and develop strategies for growth.
              </li>
              <li className="mb-4">
                Problem-Solving: Reflection enables individuals to gain new
                perspectives and develop effective problem-solving skills.
              </li>
              <li className="mb-4">
                Decision Making: It enhances decision-making skills by enabling
                individuals to consider various options and consequences.
              </li>
              <li className="mb-4">
                Emotional Regulation: Reflection helps individuals understand
                and regulate their emotions better.
              </li>
              <li className="mb-4">
                Improved Relationships: It fosters empathy and communication,
                leading to stronger relationships.
              </li>
              <li className="mb-4">
                Increased Resilience: Reflective thinking promotes resilience by
                fostering a growth mindset.
              </li>
              <li className="mb-4">
                Enhanced Creativity: Reflection stimulates creativity by
                encouraging exploration of new ideas.
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Journal;
