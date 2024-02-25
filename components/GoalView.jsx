// Import necessary dependencies
import React from "react";

// GoalView component
const GoalView = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Medium Text */}
      <h2 className="text-3xl font-medium mb-4">
        I want to have a consistent routine
      </h2>

      {/* Text with white background */}

      {/* TextField */}
      {/* <input
        type="text"
        placeholder="Enter your goal"
        className="border border-gray-300 p-2 rounded-lg mb-4"
      /> */}
      <div className="bg-green-100 w-100 p-4 rounded-lg mb-4">
        <p className="text-black">
          I want to be consistent in my routine. This includes, sleeping on
          time. Eating on time, working from 8am to 6pm
        </p>
      </div>
      {/* <div className="block max-w-md mx-100 rounded overflow-hidden shadow-lg bg-blue-100 cursor-pointer">
     

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Hey there</div>
 
        </div>
      </div> */}

      <label className="block text-sm h-100 font-semibold mb-2">
        Journal:
        <textarea
          name="description"
          className="w-full h-80 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
        />
      </label>

      {/* <textarea
        className="w-full h-80 p-2 border rounded resize-none focus:outline-none focus:ring focus:border-green-300"
        value={entry}
        onChange={handleInputChange}
        placeholder={placeholderText}
      ></textarea> */}

      {/* Button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Journal
      </button>
    </div>
  );
};

export default GoalView;
