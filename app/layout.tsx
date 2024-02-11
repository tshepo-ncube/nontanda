import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

import React from "react";

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />

        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Jack's Blog</h1>
        </Link>
        <p className="text-slate-300">
          🤟 Welcome to the MindfulManifesters blog. 💻
        </p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Pixegami</h3>
      </div>
      <About />
    </footer>
  );

  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics script to the head */}
        <title>Mindfulness Manifester </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/mind16.png" />
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
        <div className="mx-auto  max-w px-0">
          {/* {header} */}
          {/* {children} */}
          <Navbar />
          <br />
          <br />

          <br />
          <br />
          {children}
          {/* {footer} */}
          <Foot />
        </div>
      </body>
    </html>
  );
}
