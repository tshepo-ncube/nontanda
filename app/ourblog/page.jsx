import React from "react";
import Head from "next/head";
import BlogComponent from "../../components/BlogComponent";
function ourblog() {
  return (
    <div>
      <div className="px-8">
        <BlogComponent />
      </div>
      {/* Your page content */}
    </div>
  );
}

export default ourblog;
