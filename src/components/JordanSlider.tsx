"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';

const products = [
  {
    id: 1,
    image: '/j1.png',
    title: 'Nike Dri-FIT ADV TechKnit Ultra',
    price: 39.95,
    gender: 'Men\'s Running',
  },
  {
    id: 2,
    image: '/Rectangle (5).png',
    title: 'Nike Dri-FIT Challenger',
    price: 24.95,
    gender: 'Men\'s Running',
  },
  {
    id: 3,
    image: '/Rectangle (7).png',
    title: 'Nike Dri-FIT ADV Run Division',
    price: 52.95,
    gender: 'Women\'s Running',
  },
  {
    id: 4,
    image: '/Rectangle (10).png',
    title: 'Nike Fast',
    price: 37.95,
    gender: 'Women\'s Running',
  },
  {
    id: 5,
    image: '/Rectangle (11).png',
    title: 'Nike Dri-FIT ADV TechKnit Ultra',
    price: 39.95,
    gender: 'Men\'s Running',
  },
  {
    id: 6,
    image: '/Rectangle (15).png',
    title: 'Nike Dri-FIT Challenger',
    price: 24.95,
    gender: 'Men\'s Running',
  },
  {
    id: 7,
    image: '/Rectangle (19).png',
    title: 'Nike Dri-FIT ADV Run Division',
    price: 52.95,
    gender: 'Women\'s Running',
  },
  {
    id: 8,
    image: '/Rectangle.png',
    title: 'Nike Fast',
    price: 37.95,
    gender: 'Women\'s Running',
  },  {
    id: 9,
    image: '/Rectangle (20).png',
    title: ' Fast',
    price: 38.95,
    gender: 'Women\'s Running',
  },
];

const JordanSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mt-10 px-10">
      <div className="overflow-hidden">
        <h1 className='text-lg px-4 font-semibold mb-4'>Best of Air Max</h1>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div className="bg-white shadow-md rounded-lg">
                <div className="relative w-full pt-[120%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 object-cover"
                  />
                </div>
                <div className="flex justify-between mx-2 mt-2 p-2">
                  <h3 className="text-sm md:text-lg font-medium text-gray-800">
                    {item.title}
                    <p className=' font-semibold text-sm text-gray-600'>{item.gender}</p>
                  </h3>
                  <p className="text-[12px] md:text-sm font-semibold ">{item.price.toFixed(2)}€</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrevious}
          className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none"
        >   
          <FaChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none mr-20"
        >
          <FaChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default JordanSlider;