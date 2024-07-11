import React from 'react'

export const PrimaryChip = ({ children }) => {
  
  return (
    <>
      <span className="flex bg-gray-400 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded items-center text-center">
      <img src="/images/SVG.svg"  />
        <span className="text-xs font-bold uppercase text-white">
           {children}
        </span>
      </span>

    </>
  );
};

export const RedChip = ({ children }) => {
  
  return (
    <>
      <span className="flex bg-red-500 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded items-center text-center">
      <img src="/images/SVG.svg"  />
        <span className="text-xs font-bold uppercase text-white">
           {children}
        </span>
      </span>

    </>
  );
};

export const GreenChip = ({ children }) => {
  
  return (
    <>
      <span className="flex bg-green-500 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded items-center text-center">
      <img src="/images/SVG.svg"  />
        <span className="text-xs font-bold uppercase text-white">
           {children}
        </span>
      </span>

    </>
  );
};