'use client'

// pages/index.js
import React from 'react';

const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
   <center>
     <div className="bg-white p-8 rounded  max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Join Our Email list</h2>
        <p className="font mb-6 text-gray-800">Be the first to hear about our latest free content, courses, and exclusive offerings. We respect your time and pledge not to flood your inbox with daily emails – that's our commitment to you.</p>
        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </form>
      </div>
   </center>
  );
};

export default EmailForm;
