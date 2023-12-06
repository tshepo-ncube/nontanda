import React from 'react'
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const ThePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const home = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        
        <p className="text-slate-300">This is Home </p>
      </div>
    </header>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default ThePage;
