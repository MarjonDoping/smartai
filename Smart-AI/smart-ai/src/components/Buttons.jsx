import React from "react";

export const MainButton = ({ children }) => {
  return (
    <button style={{ background: '#65CFE3' }}  className=" text-white font-semibold py-2 px-4 rounded hover:bg-teal-800 ">
      {children}
    </button>
  );
};

export const GreenButton = ({ children }) => {
  return (
    <button className=" bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-800 ">
      {children}
    </button>
  );
};
