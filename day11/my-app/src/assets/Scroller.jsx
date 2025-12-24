import React, { useEffect, useRef } from 'react';
import amazon from '../assets/images/amazon.png';
import azure from '../assets/images/azure.png';
import linux from '../assets/images/linux.png';
import dataanalyst from "../assets/images/data-anyalst.png";
import devops from '../assets/images/devops.png';
import fullstack from '../assets/images/fullstack.png';
import softwaretesting from '../assets/images/software testing.png';
import paloalto from '../assets/images/paloalto.png';
import fortinet from '../assets/images/fortinet.png';
import CCNA from '../assets/images/CCNA.png';
import pmp from '../assets/images/pmp.png';
import digitalmarketing from '../assets/images/digital marketing.jpg';



const scrollerItems = [
  {img: amazon, title: 'AWS Certification' },
  {img: azure, title: 'Microsoft Azure Certification' },
  {img: linux, title: 'Linux' },
  {img: dataanalyst, title: 'Data Analyst Certification' },
  {img: devops, title: 'DevOps Certification' },
  {img: fullstack, title: 'Full Stack Certification' },
  {img: softwaretesting, title:'Software Testing Certification'},
  {img: paloalto, title:'Paloalto Firewall Certification'},
  {img: fortinet, title:'Fortinet Firewall Certification'},
  {img: CCNA, title:'CCNAandCCNP Certification'},
  {img: pmp,title:'Pmp Certification'},
  {img: digitalmarketing, title:'DigitalMarketing Certification'},

  

];

const CardScroller = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // smoother scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
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
          COURSES
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-4 sm:gap-6"
        >
          {scrollerItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 sm:w-52 md:w-60 lg:w-64 rounded-xl shadow-md bg-white p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-24 sm:h-28 md:h-32 object-contain mb-3"
              />
              <h2 className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-800">
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
