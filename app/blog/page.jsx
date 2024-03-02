import React from "react";

import fs from "fs";
import HomePage from "../page";
import BlogComponent from "../../components/BlogComponent";
import Foot from "../../components/Foot";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import HeaderComponent from "../../components/HeaderComponent";
function ourblog() {
  return (
    <>
      <HeaderComponent title={"Blog | Mindful"} />

      <body>
        <div className="mx-auto  max-w px-8">
          {/* {header} */}
          {/* {children} */}
          <Navbar />
          <br />
          <br />

          <br />
          <br />
          {/* {children} */}
          {/* <Home /> */}
          <div>
            <BlogComponent />
          </div>
          {/* {footer} */}
          <br />
          <br />
          <Foot />
        </div>
      </body>
    </>
  );
}

export default ourblog;
