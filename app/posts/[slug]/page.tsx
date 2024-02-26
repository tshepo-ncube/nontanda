import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import About from "../../../components/About";
import HeaderComponent from "../../../components/HeaderComponent";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <HeaderComponent title={post.data.title} />
      <div className="p-4">
        <div className="my-12 text-center ">
          <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>

        <div
          className="my-12 text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <article
            className="prose text-center"
            style={{ textAlign: "center" }}
          >
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </>
  );
};

export default PostPage;
