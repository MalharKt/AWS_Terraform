import React, { useEffect, useRef } from 'react';
import ibm from '../assets/images/ibm.png';
import capgemini from '../assets/images/capgemini.png';
import mars from '../assets/images/mars.png';
import microsoft from '../assets/images/microsoft.png';
import pepsi from '../assets/images/pepsi.png';
import unilever from '../assets/images/unilever.png';
import EY from '../assets/images/EY.png';
import delottie from '../assets/images/deloitte.png';

const scrollerItems = [
  { img: ibm, title: "IBM" },
  { img: capgemini, title: "Capgemini" },
  { img: mars, title: "Mars" },
  { img: microsoft, title: "Microsoft" },
  { img: pepsi, title: "Pepsi" },
  { img: unilever, title: "Unilever" },
  { img: EY, title: "EY" },
  { img: delottie, title: "delottie" },
];

const CardScroller = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset scroll position when end reached
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // adjust speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      {/* Hide scroll bar for all browsers */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="py-10 px-4 sm:px-6 md:px-12 lg:px-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          Trusted by Global Companies
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-4 sm:gap-6"
        >
          {scrollerItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 sm:w-52 md:w-60 lg:w-64 rounded-xl shadow-md bg-white p-3 sm:p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-20 sm:h-24 md:h-28 object-contain mb-2"
              />
              <h2 className="text-center text-xs sm:text-sm font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardScroller;
