import React, { useState } from "react";
import { PrimaryChip } from "../components/Chips";


const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      question: "Human-like Chatbot Powered by Natural Language Processing",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "Conversational AI For Customer Service",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "Flexible Range of Capabilities",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "GDPR Compliant Services",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "Extensive Industry Coverage",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "All-In-One Assistance for Increased ROI & Lead Acquisition",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
    {
      question: "Multilingual Support",
      answer:
        "Natural Language Processing (NLP) enables it to be a conversational artificial intelligence that mimics how a real human would answer your clients’ concerns. Semantic engineering also enables more sophisticated digital assistance with a higher level of reasoning and sensible responses.",
    },
  
  ];

  return (
    <>
      <div className="bg-cover py-24">
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="flex mb-4 ">
            <PrimaryChip>
              <span className="">Web Design</span>
            </PrimaryChip>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-black">
            Don’t see your question here? Get in touch
          </h1>
          <p className=" text-black mb-8">
            My expertise in Figma designs, WordPress development, and React.js
            code allows us to provide comprehensive solutions tailored to your
            specific needs.
          </p>

          <div>
            {accordionItems.map((item, index) => (
              <div key={index}>
                <h2>
                  <button
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 my-8 rounded-t-xl  "
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={accordionOpen === index ? "true" : "false"}
                    aria-controls={`accordion-body-${index}`}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5
                         me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {item.question}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        accordionOpen === index ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-body-${index}`}
                  className={`${
                    accordionOpen === index ? "block" : "hidden"
                  } p-5 border border-b-0 border-gray-200 bg-gray-100`}
                >
                  <p className="mb-2 text-black ">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
