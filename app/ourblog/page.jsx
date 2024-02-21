import React from "react";

import fs from "fs";
import HomePage from "../page";
import BlogComponent from "../../components/BlogComponent";
import Foot from "../../components/Foot";
import Script from "next/script";
import Navbar from "../../components/Navbar";
function ourblog() {
  return (
    <>
      <head>
        {/* Add Google Analytics script to the head */}
        <title>Blog | Mindfulness Manifester </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Explore the world of mindfulness with Mindfulness Manifester. Discover tips, practices, and resources for cultivating mindfulness in your daily life."
        />
        <meta property="og:title" content="Mindful Manifesters" />
        <meta
          property="og:description"
          content="Explore the world of mindfulness with Mindfulness Manifester. Discover tips, practices, and resources for cultivating mindfulness in your daily life."
        />
        {/* <meta property="og:image" content="/path/to/your/og-image.jpg" /> */}
        {/* <meta content="width=device-width, initial-scale=1" name="viewport" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YE94Z3VF7X" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YE94Z3VF7X');
        `}
        </Script>
      </head>
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
          <Foot />
        </div>
      </body>
    </>
  );
}

export default ourblog;
