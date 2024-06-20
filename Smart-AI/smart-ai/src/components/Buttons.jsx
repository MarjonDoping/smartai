import React from "react";

export const MainButton = ({ children }) => {
  return (
    <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-800 ">
      {children}
    </button>
  );
};
