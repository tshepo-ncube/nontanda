import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Navbar from "../../components/Navbar";
function page() {
  return (
    <>
      <HeaderComponent title={"Pricing | Mindful"} />
      <body>
        <div className="mx-auto  max-w px-8">
          <Navbar />
          {/* {header} */}
          {/* {children} */}
          {/* 
          <br />
          <br />

          <br />
          <br />
   
          
      
          <Foot /> */}
          <br />
          <br />

          <br />
          <br />

          <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">John Doe</h2>
            <p className="text-gray-600 mb-4">Email: john.doe@example.com</p>
            <p className="text-gray-700 mb-4">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus commodo quam id bibendum malesuada.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
              subscribe
            </button>
          </div>

          {/* <Foot /> */}
        </div>
      </body>
    </>
  );
}

export default page;
