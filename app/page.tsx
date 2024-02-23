import React from "react";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import fs from "fs";
import EmailForm from "../components/EmailForm";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Script from "next/script";

import Journal from "../components/Journal";
import Foot from "../components/Foot";
const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const home = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <p className="text-slate-300">This is Home </p>
        <EmailForm />
      </div>
    </header>
  );

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    // <Home/>

    <>
      <head>
        {/* Add Google Analytics script to the head */}
        <title>Home | Mindfulness Manifester </title>
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

          <Journal />
          {/* {footer} */}
          <Foot />
        </div>
      </body>
    </>
  );
};

export default HomePage;
