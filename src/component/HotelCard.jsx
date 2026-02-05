import React from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";


const Rooms = [
  { id: 1, title: "Deluxe Suite Room", price: "300", image: room1 },
  { id: 2, title: "Executive Suite Room", price: "400", image: room2 },
  { id: 3, title: "Superior Deluxe Villa", price: "600", image: room3 },
  { id: 4, title: "Premium Deluxe Villa", price: "1000", image: room4 },
  { id: 5, title: "Junior Suite Room", price: "800", image: room5 },
  { id: 2, title: "Executive Suite Room", price: "400", image: room6 },
];

export default function Hotelcard() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* 🔹 Heading Section */}
      <div className="text-center mb-12">
        <p className="text-orange-500 text-lg font-medium">Luxury Experience</p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">Rooms & Suites</h1>
      </div>

      {/* Grid layout */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Rooms.map((el) => (
          <div
            key={el.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={el.image}
              alt={el.title}
              className="w-full h-72 object-cover transition duration-300 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text on image bottom */}
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-bold uppercase tracking-wide">
                From ${el.price} / Night
              </p>
              <h2 className="text-2xl font-semibold">{el.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
