import React from 'react';
import { MainButton } from '../components/Buttons';
// Import your background image

const HeroPage = () => {
  return (
    <div
      className="relative bg-center flex items-center"
      style={{ backgroundImage: `url('/images/mainbg.png')`, paddingTop: '100px' }}
    >
      {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div> */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-black font-bold mb-4 py-4">
            <span className="text-teal-500">SMART AI: </span> Your Smart Conversational 
            Business Solution
          </h1>
          <p className="text-1xl text-black py-4">
            TIRO AI is a machine learning/AI technology developed for online chat applications, QA, moderation, and coaching services. SMART AI reinvents typical chatbots into a cost-effective conversion tool, initiating human-like conversations to drive higher user engagements.
          </p>
          <MainButton>
              <span>
                Get Started
              </span>
             </MainButton>
          <img className="w-90 mx-auto" src="/images/heroimage.png" alt="Card image" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
