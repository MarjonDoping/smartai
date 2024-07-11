import React from 'react'
import { GreenChip, RedChip } from '../components/Chips'


const Solutions = () => {
  return (
    <div className="bg-center bg-cyan-gradient" style={{ background: 'linear-gradient(89deg, #00B9ED 34.77%, #AAFDEF 113.38%)' }}>
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="py-10">
        <div className="flex pb-2">
          <GreenChip>
            <span className="">AI Technology</span>
          </GreenChip>
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-black font-bold mb-4 py-2">
          <span className="text-white">Superb Conversational AI Solutions
For Your Business </span>
        </h1>
        <p className="text-1xl text-white pb-4">
        TIRO AI is not  just a chatbot. It offers the best conversational artificial  intelligence solutions in the market right now. Backed by smart  algorithms, natural language processing (NLP), machine learning, and  neural networks, the software progressively understands what your users  are saying.
        </p>
      </div>
    </div>
    <img
            className="mx-auto"
            src="/images/desktop.svg"
            alt="Card image"
          />
  </div>
  )
}

export default Solutions