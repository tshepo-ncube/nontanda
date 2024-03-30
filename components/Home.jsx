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
    <div style={{ marginTop: -50 }} className="bg-black-500 min-h-screen mb-18">
      {/* Hero Section */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Your content here. Make sure it's positioned relative if you want it above the overlay */}
        <div className="relative">
          <div className="container mx-auto text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to Mindful</h1>
            <p className="text-lg">
              Our chatbot assistant helps you manifest and achieve your goals.{" "}
              <br />
              <i>
                <strong>Try it, its free!</strong>
              </i>
            </p>

            {/* <Link href="/chat" target={"_blank"}>
              <button
                onClick={handleChatBtnClick}
                className="opacity-50 text-white px-4 py-2 mt-4 rounded-full border border-white hover:text-black hover:bg-white hover:border-white-800 focus:outline-none focus:border-gray-900 transition duration-300"
              >
                Start Chat
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      {/* <div
        className="bg-black/100 text-white py-20"
        style={{
          maxHeight: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div
          className="container mx-auto text-center p-0"
          style={{ marginTop: -25 }}
        >
          <h1 className="text-4xl font-bold mb-1">Welcome to Mindful</h1>
          <p className="text-lg">
<<<<<<< HEAD
            Our assistant helps you manifest and achieve your goals. <br />
            <i>
              <strong>Try it, its free!</strong>
            </i>
=======
            Empowering our community through mindfulness
>>>>>>> a7878db7166df5d9b4c3b7efb7a92e6a92a25cef
          </p>

          <Link href="/chat" target={"_blank"}>
            <button
              onClick={handleChatBtnClick}
              className="bg-white text-black px-4 py-2 mt-4 rounded-full border hover:text-white hover:bg-blue-500 hover:border-blue-800 focus:outline-none focus:border-gray-900 transition duration-300"
            >
              Start Chat
            </button>
          </Link>
        </div>
<<<<<<< HEAD
      </div> */}

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
=======
      </div>
      <div className="bg-black-500 min-h-screen mb-18 px-8">
        {/* Hero Section */}
        {/* <div
          className="bg-black/70 text-white py-20"
          style={{
            maxHeight: 20,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="container mx-auto text-center p-0">
            <h1 className="text-4xl font-bold mb-1">Welcome to Mindful</h1>
            <p className="text-lg">
              Empowering our community through mindfulness.
            </p>
       
          </div>
        </div> */}

        <div className="bg-white-100 p-18 mt-10">
          <div className="container mx-auto text-center">
            {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">Who We Are</h2> */}
            <p className="text-gray-600 leading-loose mb-8">
              We are passionate about mindfulness and committed to helping
              individuals on their journey to a more mindful life. Our focus
              extends to creating mindful content, developing thoughtful
              products, and offering services designed to cultivate mindfulness.
              By integrating mindfulness into various aspects of life, we aim to
              empower people to lead more conscious and fulfilling lives.
            </p>
            <p className="text-gray-600 leading-loose">
              Whether through our engaging content, purposeful products, or
              transformative services, we strive to be your companion in the
              mindful business. Join us in the pursuit of mindfulness and
              discover the positive impact it can have on your well-being.
            </p>
          </div>
>>>>>>> a7878db7166df5d9b4c3b7efb7a92e6a92a25cef
        </div>

<<<<<<< HEAD
      <Testimonials />

      <EmailForm />
=======
        <EmailForm />
      </div>{" "}
>>>>>>> a7878db7166df5d9b4c3b7efb7a92e6a92a25cef
    </div>
  );
};

export default Home;
