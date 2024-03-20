"use client";
import React, { useEffect } from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";
import Testimonials from "./testimonials";

// utils/analytics.js
import ReactGA from "react-ga";
// export const initGA = () => {
//   ReactGA.initialize("G-YE94Z3VF7X"); // Replace with your actual GA Measurement ID
// };

// export const logPageView = () => {
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// };

// import ReactGA from 'react-ga';

const Home = () => {
  function handleChatBtnClick() {
    // Track a custom event
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on Chat Home Button",
      label: "Home Page",
    });
    // Continue with your button's click handler
  }

  useEffect(() => {
    ReactGA.initialize("G-YE94Z3VF7X");
  }, []);
  return (
    <div className="bg-black-500 min-h-screen mb-18">
      {/* Hero Section */}
      <div
        className="bg-black/70 text-white py-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container mx-auto text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mindful</h1>
          <p className="text-lg">
            Our mindful assistant learns your behaviour and helps you learn more
            about yourself. <br />
            <i>
              <strong>Try it, for free!</strong>
            </i>
          </p>
          {/* <button className="bg-white text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:border-blue-500">
            Chat
          </button> */}

          {/* <button className="bg-white text-black-500 px-4 py-2 mt-2 rounded-full border border-black-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-700 transition duration-300">
      Start Chat
    </button> */}

          <Link href="/chat" target={"_blank"}>
            <button
              onClick={handleChatBtnClick}
              className="bg-white text-black px-4 py-2 mt-4 rounded-full border hover:text-white hover:bg-blue-500 hover:border-blue-800 focus:outline-none focus:border-gray-900 transition duration-300"
            >
              Start Chat
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white-100 p-8 mt-10">
        <div className="container mx-auto text-center">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">Who We Are</h2> */}
          <p className="text-gray-600 leading-loose mb-8">
            Welcome to MindfulManifesters, your personal chatbot guide designed
            to turn your goals into achievements. Our platform offers
            personalized conversations, progress tracking, and motivational
            support tailored to each of your ambitions, whether they're related
            to personal development, fitness, or professional growth. With the
            ability to add unlimited goals, MindfulManifesters is here to ensure
            that every target you set is not just a dream, but a milestone
            you're equipped to reach.
          </p>
          <p className="text-gray-600 leading-loose">
            Join MindfulManifesters today and embrace a community dedicated to
            growth and achievement. Our adaptive chatbot technology provides
            customized encouragement and actionable insights, making it easier
            than ever to stay on track and overcome obstacles. Start manifesting
            your aspirations into reality with MindfulManifesters, where your
            goals aren't just planned; they're achieved.
          </p>
        </div>
      </div>

      <Testimonials />

      <EmailForm />
    </div>
  );
};

export default Home;
