import React from "react";

const ModalNavbar = ({ title }) => {
  return (
    <nav className="z-14 bg-white p-4 fixed top-0 w-full flex justify-center items-center">
      <center>
        <div
          className="text-black text-3xl  font-bold pt-4"
          style={{ fontSize: 21 }}
        >
          <h1>{title}</h1>
        </div>
      </center>
    </nav>
  );
};

export default ModalNavbar;
