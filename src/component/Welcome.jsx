import React from "react";
import mountain from "../assets/mountain.jpg"; // change to your image

export default function Welcome() {
  return (
    <div className="bg-gray-50 py-20 px-6 text-center">
      {/* Small heading */}
      <p className="text-orange-500 text-lg md:text-xl font-semibold mb-3 tracking-wide">
        Welcome To
      </p>

      {/* Hotel Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
        Hotel Country Villa
      </h1>

      {/* Intro paragraph */}
      <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
        Tucked in the serene hills of Nagarkot, Hotel Country Villa offers
        breathtaking mountain views, cozy comfort, and warm Nepali hospitality.
        Witness the Himalayan sunrise, breathe the fresh mountain air, and
        unwind in a peaceful environment that ensures every stay is truly
        memorable.
      </p>

      {/* Image */}
      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={mountain}
          alt="Himalayan View"
          className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
