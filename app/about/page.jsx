import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Home from "../../components/Home";
import Navbar from "../../components/Navbar";
import Foot from "../../components/Foot";
function page() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    // <Home/>

    <>
      <HeaderComponent title={"About | Mindful"} />
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
          <Home />
          {/* {footer} */}
          {/* {footer} */}
          <Foot />
        </div>
      </body>
    </>
  );
}

export default page;
