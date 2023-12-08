'use client'
import React from 'react'
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import fs from 'fs'
import EmailForm from '../components/EmailForm'
import Home from '../components/Home'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../utils/analytics';


const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const home = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        
        <p className="text-slate-300">This is Home </p>
        <EmailForm/>
      </div>
    </header>
  );

  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ga.initGA();
    // Track initial pageview
    ga.logPageView();

    // Set up a listener to track page changes
    const handleRouteChange = (url:string) => {
      ga.logPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    <Home/>
  );
};

export default HomePage;
