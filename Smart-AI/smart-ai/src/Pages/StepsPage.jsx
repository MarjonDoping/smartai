import React from "react";
import { MainButton } from "../components/Buttons";
import { PrimaryChip } from "../components/Chips";

const StepsPage = () => {
  return (
    <div className="bg-center">
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="py-10">
          <div className="flex pb-2">
            <PrimaryChip>
              <span className="">Web Design</span>
            </PrimaryChip>
          </div>

          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-black font-bold mb-4 py-2">
            How to Use <span className="text-teal-500">SMART AI </span>Services
          </h1>
          <p className="text-1xl text-black pb-4">
            Although we offer a sophisticated and revolutionary platform,
            working with this product is a lot less complicated than you think.
          </p>
        </div>
      </div>
     

      {/* Two-column section */}
      <div className="max-w-screen-xl mx-auto mt-8 px-4 sm:px-6 py-12">
      <div className="flex items-center justify-center">
        <svg
          width="32"
          height="141"
          viewBox="0 0 32 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 109.992L16.5 -0.00781775"
            stroke="url(#paint0_linear_9588_2529)"
            stroke-width="2"
          />
          <rect
            y="109.992"
            width="32"
            height="31"
            rx="15.5"
            fill="url(#paint1_linear_9588_2529)"
          />
          <path
            d="M15.316 132.492V122.172H13.028V120.572H17.188V132.492H15.316Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9588_2529"
              x1="17.1737"
              y1="71.7243"
              x2="-25.9871"
              y2="34.8415"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00B9ED" />
              <stop offset="1" stop-color="#AAFDEF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9588_2529"
              x1="11.1325"
              y1="130.878"
              x2="36.552"
              y2="130.598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00B9ED" />
              <stop offset="1" stop-color="#AAFDEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
        <div className="text-center p-8">
        <div className="flex items-center justify-center text-2xl text-teal-400 font-bold">
            <h1>Initial Assessment </h1>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-cyan1 font-bold mb-4 py-3">
            Carefully assessing the nature
          </h1>
          <p className="text-1xl text-black ">
            Although we offer a sophisticated and revolutionary platform,
            working with this product is a lot less complicated than you think.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image) */}
          <div>
            <img
              src={"/images/mobile1.png"}
              alt="Sample"
              className="rounded-lg"
            />
          </div>
          {/* Right Column (Heading, Text, Button) */}
          <div>
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.743164" width="44" height="44" rx="4" fill="white" />
              <rect
                x="0.5"
                y="1.24316"
                width="43"
                height="43"
                rx="3.5"
                stroke="black"
                stroke-opacity="0.2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3078 11.9932C16.5068 11.9929 15.9572 11.9927 15.4687 12.1266C14.4431 12.4078 13.5851 13.1112 13.1083 14.0618C12.8812 14.5145 12.7736 15.0535 12.6167 15.8389L11.9971 18.9371C11.7655 20.0951 12.0829 21.215 12.7507 22.0547L12.7507 24.7996C12.7507 26.6374 12.7507 28.093 12.9039 29.2322C13.0615 30.4047 13.3936 31.3536 14.142 32.102C14.8903 32.8503 15.8393 33.1824 17.0117 33.3401C18.1509 33.4932 19.6066 33.4932 21.4443 33.4932H22.5572C24.3949 33.4932 25.8506 33.4932 26.9898 33.3401C28.1622 33.1824 29.1111 32.8503 29.8595 32.102C30.6079 31.3536 30.94 30.4047 31.0976 29.2322C31.2508 28.093 31.2508 26.6374 31.2507 24.7997V22.0547C31.9186 21.215 32.236 20.0951 32.0044 18.9371L31.3848 15.8389C31.2279 15.0535 31.1203 14.5145 30.8932 14.0618C30.4164 13.1112 29.5584 12.4078 28.5328 12.1266C28.0443 11.9927 27.4947 11.9929 26.6937 11.9932H17.3078ZM28.2692 23.4932C28.7981 23.4932 29.2979 23.3868 29.7507 23.1956V24.7432C29.7507 26.65 29.7492 28.0047 29.611 29.0324C29.4757 30.0385 29.222 30.6181 28.7988 31.0413C28.3756 31.4645 27.796 31.7182 26.7899 31.8535C26.3444 31.9133 25.8375 31.9476 25.2507 31.9671V29.211C25.2508 28.7712 25.2508 28.3919 25.2226 28.0806C25.1927 27.7514 25.1267 27.4254 24.9493 27.1182C24.7518 26.7762 24.4678 26.4921 24.1257 26.2947C23.8185 26.1173 23.4926 26.0512 23.1634 26.0214C22.8521 25.9932 22.4728 25.9932 22.033 25.9932H21.9685C21.5287 25.9932 21.1494 25.9932 20.8381 26.0214C20.5089 26.0512 20.183 26.1173 19.8757 26.2947C19.5337 26.4921 19.2497 26.7762 19.0522 27.1182C18.8748 27.4254 18.8088 27.7514 18.7789 28.0806C18.7507 28.3919 18.7507 28.7712 18.7507 29.211L18.7507 31.9671C18.164 31.9476 17.6571 31.9133 17.2116 31.8535C16.2055 31.7182 15.6259 31.4645 15.2026 31.0413C14.7794 30.6181 14.5258 30.0385 14.3905 29.0324C14.2523 28.0047 14.2507 26.65 14.2507 24.7432V23.1956C14.7036 23.3868 15.2034 23.4932 15.7323 23.4932C17.0062 23.4932 18.1452 22.8648 18.8388 21.889C19.5483 22.8572 20.6939 23.4932 22.0005 23.4932C23.3073 23.4932 24.453 22.857 25.1625 21.8887C25.8561 22.8647 26.9952 23.4932 28.2692 23.4932ZM20.2507 31.9912C20.6391 31.9931 21.0548 31.9932 21.5007 31.9932H22.5007C22.9466 31.9932 23.3624 31.9931 23.7507 31.9912V29.2432C23.7507 28.7621 23.75 28.4514 23.7287 28.216C23.7083 27.9908 23.6739 27.9091 23.6503 27.8682C23.5844 27.7542 23.4898 27.6595 23.3757 27.5937C23.3349 27.5701 23.2531 27.5357 23.028 27.5153C22.7925 27.4939 22.4819 27.4932 22.0007 27.4932C21.5196 27.4932 21.2089 27.4939 20.9735 27.5153C20.7483 27.5357 20.6666 27.5701 20.6257 27.5937C20.5117 27.6595 20.4171 27.7542 20.3512 27.8682C20.3276 27.9091 20.2932 27.9908 20.2728 28.216C20.2515 28.4514 20.2507 28.7621 20.2507 29.2432V31.9912ZM18.6718 13.4932H17.4185C16.464 13.4932 16.1334 13.4998 15.8653 13.5733C15.2499 13.742 14.7351 14.164 14.449 14.7343C14.3244 14.9828 14.2531 15.3057 14.0659 16.2416L13.468 19.2312C13.1822 20.6601 14.2751 21.9932 15.7323 21.9932C16.9186 21.9932 17.9119 21.0943 18.03 19.9139L18.0985 19.228L18.1025 19.186L18.6718 13.4932ZM19.592 19.3682L20.1795 13.4932H23.8218L24.406 19.3352C24.5483 20.7583 23.4308 21.9932 22.0005 21.9932C20.5814 21.9932 19.4701 20.7774 19.592 19.3682ZM28.1362 13.5733C27.8681 13.4998 27.5375 13.4932 26.583 13.4932H25.3295L25.9715 19.9139C26.0896 21.0943 27.0829 21.9932 28.2692 21.9932C29.7264 21.9932 30.8193 20.6601 30.5335 19.2312L29.9356 16.2416C29.7484 15.3057 29.6771 14.9828 29.5525 14.7343C29.2664 14.164 28.7516 13.742 28.1362 13.5733Z"
                fill="#486BAF"
              />
            </svg>
            <h2 className="text-3xl font-bold mb-2 py-3">Goals and demand</h2>
            <p className="text-base text-gray-700 mb-4">
              This is very important for us to ensure our conversational
              intelligence software adheres to your specific goals and demands.
            </p>
            <br /> <br />
            <img src="/images/useful.svg"  />
            <h2 className="text-3xl font-bold mb-2 py-3">Effective and useful</h2>
            <p className="text-base text-gray-700 mb-4">
            Our platform gradually absorbs your  company’s key facets for it to become a 100% effective and handy tool  you can use.
            </p>
          </div>
        </div>
      </div>


 {/* Two-column section */}
 
 <div className="max-w-screen-xl mx-auto mt-8 px-4 sm:px-6 py-12">
 <div className="flex items-center justify-center">
 <img src="/images/num2.svg"  />
      </div>
        <div className="text-center p-8">
        <div className="flex items-center justify-center text-2xl text-teal-400 font-bold">
            <h1>Design </h1>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-cyan1 font-bold mb-4 py-3">
          Hands-on approach
          </h1>
          <p className="text-1xl text-black ">
          We use a hands-on approach in fleshing out all the data and  requirements needed to complete your custom-fit solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image) */}
          <div>
            <img
              src={"/images/img2.png"}
              alt="Sample"
              className="rounded-lg"
            />
          </div>
          {/* Right Column (Heading, Text, Button) */}
          <div>
          <img src="/images/datab.svg"  />
            <h2 className="text-3xl font-bold mb-2 py-3">Essential data</h2>
            <p className="text-base text-gray-700 mb-4">
            With machine  learning, neural networks, and natural language processing (NLP) at its  core, we can gather and input sufficient and essential data for SMART AI  to  gauge the nature of your business process and your customers thoroughly.
            </p>
           
          </div>
        </div>
      </div>

   {/* Two-column section */}
   <div className="max-w-screen-xl mx-auto mt-8 px-4 sm:px-6 py-12">
      <div className="flex items-center justify-center">
      <img src="/images/num3.svg"  />
      </div>
        <div className="text-center p-8">
        <div className="flex items-center justify-center text-2xl text-teal-400 font-bold">
            <h1>Trial and Integration </h1>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-cyan1 font-bold mb-4 py-3">
          Finalized and inputted
          </h1>
          <p className="text-1xl text-black ">
          Once all the necessary data has been finalized and inputted in our  AI conversation program, a rigorous trial period will follow. 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image) */}
          <div>
            <img
              src={"/images/mobile1.png"}
              alt="Sample"
              className="rounded-lg"
            />
          </div>
          {/* Right Column (Heading, Text, Button) */}
          <div>
          <img src="/images/magic.svg"  />
            <h2 className="text-3xl font-bold mb-2 py-3">Enhancement and tweaking</h2>
            <p className="text-base text-gray-700 mb-4">
            In this  phase, we identify additional areas that need enhancement and tweaking  so that the software responds aptly and is ready for live  implementation. 
            </p>
            <br /> <br />
            <img src="/images/heart.svg"  />
            <h2 className="text-3xl font-bold mb-2 py-3">User-friendly</h2>
            <p className="text-base text-gray-700 mb-4">
            Our aim is to build an automated assistant that you can  rely on for a user-friendly service.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default StepsPage;
