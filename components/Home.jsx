import React from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";

const Home = () => {
  return (
    <div className="" style={{ marginTop: -30 }}>
      <div
        className="bg-black/70 text-white py-20"
        style={{
          maxHeight: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div
          className="container mx-auto text-center p-0"
          style={{ marginTop: -20 }}
        >
          <h1 className="text-4xl font-bold mb-1">Welcome to Mindful</h1>
          <p className="text-lg">
            Empowering our community through mindfulness
          </p>
          {/* <button className="bg-white text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:border-blue-500">
      Chat
    </button> */}

          {/* <button className="bg-white text-black-500 px-4 py-2 mt-2 rounded-full border border-black-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-700 transition duration-300">
      Start Chat
    </button> */}

          {/* <Link href='/chat'>

      <button className="bg-black text-white px-4 py-2 mt-4 rounded-full border border-black hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:border-gray-900 transition duration-300">
        Start Chat
      </button>

    </Link> */}
        </div>
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
        </div>

        <EmailForm />
      </div>{" "}
    </div>
  );
};

export default Home;
