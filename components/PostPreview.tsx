import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <>
      {/* <div className=" mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            ></img>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {props.title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{props.subtitle}</p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href={`/posts/${props.slug}`}
            >
              Read more
            </a>
          </div>
        </div>
   
      </div>
      <div className=" mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            ></img>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {props.title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{props.subtitle}</p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href={`/posts/${props.slug}`}
            >
              Read more
            </a>
          </div>
        </div>
     
      </div> */}

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
          {/* 
          <a
            className="text-white w-70 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href={`/posts/${props.slug}`}
          >
            Read more
          </a> */}
          {/* <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </div>
      </a>
    </>
  );
};

export default PostPreview;
