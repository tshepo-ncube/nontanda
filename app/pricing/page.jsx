import React from "react";
import HeaderComponent from "../../components/HeaderComponent";

import Navbar from "../../components/Navbar";
function page() {
  return (
    <>
      <HeaderComponent title={"Pricing | Mindful"} />
      <body>
        <div classNameName="mx-auto  max-w px-8">
          <Navbar />
          {/* {header} */}
          {/* {children} */}

          <br />

          <div style={{ padding: 10 }}>
            <PricingTable />
          </div>

          {/* <PricingContainer /> */}

          {/* <Foot /> */}
        </div>
      </body>
    </>
  );
}

const PricingTable = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
              Plans &amp; <span className="text-blue-500">Pricing</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Discover the Perfect AI Companion for Your Journey! Mindful brings
              you a heightened level of understanding, seamless communication,
              and unparalleled expertise on your reflective path. Choose the
              Plan that resonates with you and experience a new dimension of
              mindfulness.
            </p>
          </div>

          <div className="hidden mt-16 lg:block">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-8 pr-4"></th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Free{" "}
                    </span>
                    <p className="mt-6 text-6xl font-bold">$0</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Basic{" "}
                    </span>
                    <p className="mt-6 text-6xl font-bold">$4.99</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>

                  <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                    <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">
                      {" "}
                      Popular{" "}
                    </span>
                    <p className="mt-6 text-6xl font-bold text-white">$9.99</p>
                    <p className="mt-2 text-base font-normal text-gray-200">
                      Per month
                    </p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Gold{" "}
                    </span>
                    <p className="mt-6 text-6xl font-bold">$14.99</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Confidential Conversations
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Available 24/7
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Personalized Assistant
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Track Progress
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3490dc"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Daily Messages
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    12
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    27
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    72
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Unlimited
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Number Of Goals
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    3
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    10
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    16
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Unlimited
                  </td>
                </tr>

                {/* <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Unmetered Bandwidth
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    SSD Disk
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    VCPUS Fontworld
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    WordPress install
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Server speed
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>

                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr> */}

                <tr>
                  <td className="py-6 pr-4"></td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-white"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600"> Free </span>
              <p className="mt-2 text-xl font-bold">$0</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600"> Basic </span>
              <p className="mt-2 text-xl font-bold">$4.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Popular{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$9.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600"> Gold </span>
              <p className="mt-2 text-xl font-bold">$14.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Confidential Conversations</p>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold"> Personalized Assistant</p>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold"> Track Progress</p>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              {" "}
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#3490dc"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold"> Daily Messages</p>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">12</div>

            <div className="px-2 py-2">27</div>

            <div className="px-2 py-2">72</div>

            <div className="px-2 py-2">Unlimited</div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold"> Number Of Goals</p>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">3</div>

            <div className="px-2 py-2">10</div>

            <div className="px-2 py-2">16</div>

            <div className="px-2 py-2">Unlimited</div>
          </div>

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600"> Free </span>
              <p className="mt-2 text-xl font-bold">$0</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600"> Basic </span>
              <p className="mt-2 text-xl font-bold">$4.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Popular{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$9.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 pt-2 pb-4 sm:px-4">
              <span className="text-sm font-medium text-blue-600"> Gold </span>
              <p className="mt-2 text-xl font-bold">$14.99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
