import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  function formatDateToWords(dateString: string) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [year, month, day] = dateString.split("-").map(Number);

    const monthName = months[month - 1];

    return `${monthName} ${day}, ${year}`;
  }
  return (
    <>
      <a
        href={`/posts/${props.slug}`}
        className="xl:w-full sm:w-full lg:w-full w-full  md:w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-120 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
          src={props.coverImg}
          alt=""
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.subtitle}
          </p>{" "}
          <div className="w-40 px-2 text-xs group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center h-8 justify-center">
            <span> {formatDateToWords(props.date)}</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default PostPreview;
