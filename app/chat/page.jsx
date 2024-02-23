import React from "react";
import Home from "../../components/Home";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import Foot from "../../components/Foot";
import HeaderComponent from "../../components/HeaderComponent";

function page() {
  return (
    // <div>
    //   <Home />
    // </div>
    <>
      <HeaderComponent title={"Chat(Goals) | Mindful"} />

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

          <Foot />
        </div>
      </body>
    </>
  );
}

export default page;
