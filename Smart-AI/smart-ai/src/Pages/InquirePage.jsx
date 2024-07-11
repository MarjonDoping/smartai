import React from "react";
import { GreenButton, MainButton } from "../components/Buttons";

const InquirePage = () => {
  return (
    <div className="bg-cover bg-center h-64 relative rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
        <div className="text-4xl mb-4">
          <img src="/images/logo.png" className="h-12" />
        </div>

        <p className="mb-4">
          Unlock the flexible and long-term benefits of including a
          conversational chatbot service for websites!
        </p>

        <GreenButton>
          <span>Get Started</span>
        </GreenButton>
      </div>

      <img
        className="inset-0 h-full w-full object-cover z-index"
        src="/images/bgcyan.png"
        alt="background"
      />
    </div>
  );
};

export default InquirePage;
