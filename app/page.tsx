import React from 'react'
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import fs from 'fs'
import EmailForm from '../components/EmailForm'
import Home from '../components/Home'

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

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    <Home/>
  );
};

export default HomePage;
