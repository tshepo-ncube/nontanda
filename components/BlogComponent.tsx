import React from "react";
import getPostMetadata from "./getPostMetadata";
import PostPreview from "./PostPreview";
import fs from "fs";
// function BlogComponent() {
//   return (
//     <div>BlogComponent</div>
//   )
// }
import ThePage from "../app/thepage";

const BlogComponent = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div>
      <h1 className="text-2xl text-black font-bold mt-4 py-4">Recent Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </div>
  );
};

export default BlogComponent;
