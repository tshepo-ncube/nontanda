import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <>
      <a
        href={`/posts/${props.slug}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-120 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.subtitle}
          </p>
        </div>
      </a>
    </>
  );
};

export default PostPreview;
