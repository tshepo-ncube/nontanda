import React from "react";

import fs from "fs";
import HomePage from "../page";
import BlogComponent from "../../components/BlogComponent";
import Foot from "../../components/Foot";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import HeaderComponent from "../../components/HeaderComponent";
import ReflectionAssistant from "../../components/home-components/ReflectionAssistant";
import Testimonials from "../../components/testimonials";
function ourblog() {
  return (
    <>
      <HeaderComponent title={"Chat | Mindful"} />

      <body>
        <div className="mx-auto  max-w ">
          {/* {header} */}
          {/* {children} */}
          {/* <Navbar /> */}

          {/* {children} */}
          {/* <Home /> */}
          <div>{/* <ReflectionAssistant /> */}</div>

          <br />
          <br />
          {/* {footer} */}
          {/* <Testimonials /> */}
        </div>
      </body>
    </>
  );
}

export default ourblog;
