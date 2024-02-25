import React from "react";
import Home from "../../components/Home";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import Foot from "../../components/Foot";
import HeaderComponent from "../../components/HeaderComponent";
import MyGoals from "../../components/Goals";

function page() {
  return (
    // <div>
    //   <Home />
    // </div>
    <>
      <HeaderComponent title={"My Goals | Mindful"} />

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
          <MyGoals />

          {/* <Foot /> */}
        </div>
      </body>
    </>
  );
}

export default page;
