import React from "react";
import { PrimaryChip, RedChip } from "../components/Chips";

const Services = () => {
  const cards = [
    { icon: '/images/SVG3.svg', title: '24/7 Serviceability', description: 'One of the biggest perks to having a trustworthy AI chatbot for your website is the possibility of providing round-the-clock service to your customers. Connect with your target end-users as you effortlessly devise tailor-made solutions for their specific needs and' },
    { icon: '/images/SVG1.svg', title: 'Globally Competitive', description: 'Our conversational AI platform continues to learn and improve as it is exposed to more relevant data from your customers and business operations. Manage your existing resources and equip your services with a definitive edge that sets you apart from your toughest competitors.' },
    { icon: '/images/SVG2.svg', title: 'Progressive and Reliable Tool', description: 'There is no longer room for outdated marketing and customer support practices. The beauty of forward-thinking solutions like our virtual talk AI chatbot is there is always room to gain new knowledge and improve based on the specific demands and structure of your work.' },
    { icon: '/images/SVG4.svg', title: 'Stability and Leverage', description: 'The increasing transition towards a more technologically advanced lifestyle entails staying updated with the trends and establishing a solid and inventive platform that balances your company framework against large-scale industry breakthroughs in the future.' },
  ];

  return (
    <div className="bg-center">
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="py-10">
          <div className="flex pb-2">
            <RedChip>
              <span className="">AI Technology</span>
            </RedChip>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-black font-bold mb-4 py-2">
            <span className="text-teal-500">Knowledge-Engineering </span>at its Finest
          </h1>
          <p className="text-1xl text-black pb-4">
            Why choose SMART's AI platform as a service? Let us count the ways!
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-8">
              <img src={card.icon} alt={`Icon for ${card.title}`} className="w-12 h-12 mb-4 " />
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
``