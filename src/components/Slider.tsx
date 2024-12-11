"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';

const items = [
  {
    id: 1,
    image: '/Rectangle (1).png',
    title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
    
  },
  {
    id: 2,
    image: '/Rectangle (12).png',
      title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 3,
    image: '/Rectangle (6).png',
      title: 'Nike Air Max 97 SE',
    gender: 'Men s shoes',
    price: 16.99,
  },{
    id: 4,
    image: '/Rectangle (5).png',
      title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 5,
    image: '/Rectangle (3).png',
    title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 6,
    image: '/Rectangle (19).png',
    title: 'Nike Air Max 97 SE',
    gender: 'Men s shoes',
    price: 16.99,
  },{
    id: 7,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (20).png',
    price: 225,
    gender: 'Women\'s Wear',
    
  },
  {
   id:  8,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (21).png',
    price: 365,
    gender: 'Men\'s Wear',
  },
  {
   id: 9,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (22).png',
    price: 754,
    gender: 'Men\'s Wear',
    },
    {
    id: 10,
    title: 'Nike Dri-FIT UV Hyverse',
    image: '/Image (6).png',
    price: 107 ,
    gender: 'Men\'s Wear',
  },
  {
    id: 11,
    title: 'Nike Court Vision Low Next Nature',
    image: '/Image (7).png',
    price: 499,
    gender: 'Men\'s Wear',
  },
  {
    id: 12,
    title: 'Nike Air Force 1 PLAT-FORM',
    image: '/Image (8).png',
    price: 685,
    gender: 'Women\'s Wear',
    
  },
  {
    id: 13,
    title: 'Nike Air Force 1 Shadow',
    image: '/Image (9).png',
    price: 905,
    gender: 'Men\'s Wear',
    

  },
  {
    id: 14,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (1).png',
    price: 225,
    gender: 'Men\'s Wear',
    
  },
  {
   id: 16,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (2).png',
    price: 495,
    gender: 'Men\'s Wear',
  },
  {
   id: 17,
    title: 'Nike Sportswear Tank',
    image: '/Rectangle (3).png',
    price: 275,
    gender: 'Men\'s Wear',
  },
  {
    id: 18,
    title: 'Nike Dri-FIT UV Hyverse',
    image: '/Rectangle (6).png',
    price: 1107 ,
    gender: 'Men\'s Wear',
  },
  {
    id: 19,
    title: 'Nike Court Vision Low Next Nature',
    image: '/Rectangle (7).png',
    price: 489,
    gender: 'Men\'s Wear',
  },
  {
    id: 20,
    title: 'Nike Air Force 1 PLAT-FORM',
    image: '/Rectangle (8).png',
    price: 685,
    gender: 'Women\'s Wear',
    
  },
];
const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mt-10 px-10">
          <div className="overflow-hidden">
              <h1 className='text-lg px-4 font-semibold mb-4'>Best of Air Max</h1>
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div className="bg-white shadow-md rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={256}
                  width={100}
                  
                  className="w-full h-64 object-cover"
                />
                <div className=" flex justify-between mx-2 mt-2">
                  <h3 className="text-sm md:text-lg font-medium text-gray-800">
                    {item.title}
                  <p className='font-semibold text-sm'>{item.gender}</p>
                          </h3>
                        
                  <p className="font-semibold text-sm">{item.price.toFixed(2)} €</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrevious}
          className="bg-white rounded-full   hover:bg-gray-200 focus:outline-none"
        >   
          <FaChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white rounded-full  mr-20 hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronRight className="h-6 w-6 text-gray-800 " />
        </button>
      </div>
    </div>
  );
};

export default Slider;