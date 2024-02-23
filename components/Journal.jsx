"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ReflectionComponent from "./Explaination";
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
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        {insights ? (
          <>
            <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Reflect on an experience.
              </h2>
              <div className="relative">
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
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Insight.</h2>
              <div className="relative">
                <div className="w-full mx-auto p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300">
                  <p>
                    It sounds like you've been grappling with a heavy burden of
                    self-doubt and questioning your worthiness in your
                    relationships, despite the love and support you receive. The
                    lingering doubts and insecurities seem to overshadow even
                    your happiest moments, casting a shadow over your
                    experiences. It's important to recognize that these feelings
                    are valid, but they don't define your worth or deservingness
                    of happiness. Perhaps exploring these doubts with compassion
                    and seeking validation from within can help you cultivate a
                    deeper sense of self-acceptance and find peace within your
                    relationships. Remember, you are deserving of love and
                    happiness, and your worthiness doesn't hinge on external
                    validation.
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
              Self-Awareness: Reflecting helps individuals become more aware of
              their emotions, beliefs, and values.
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
              Emotional Regulation: Reflection helps individuals understand and
              regulate their emotions better.
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
  );
};

export default Journal;
