import React from "react";

export default function BookingBar() {
  const handleScrollToRooms = () => {
    const section = document.getElementById("rooms");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full border-b border-orange-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Book Online</h2>
          <p className="text-sm text-gray-500">Guaranteed Accommodation</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Check-in */}
          <div className="flex items-center border rounded-lg px-4 py-3 w-full md:w-48">
            <div className="flex-1">
              <p className="text-xs text-gray-400">Check-In</p>
              <p className="text-sm font-medium">2025/11/1</p>
            </div>
            <span className="text-orange-500 text-lg">📅</span>
          </div>

          {/* Check-out */}
          <div className="flex items-center border rounded-lg px-4 py-3 w-full md:w-48 bg-gray-100">
            <div className="flex-1">
              <p className="text-xs text-gray-400">Check-Out</p>
              <p className="text-sm font-medium">2025/11/1</p>
            </div>
            <span className="text-orange-500 text-lg">📅</span>
          </div>

          {/* Guests */}
          <div className="flex items-center border rounded-lg px-4 py-3 w-full md:w-56 bg-gray-100">
            <div className="flex-1">
              <p className="text-xs text-gray-400">Guests</p>
              <p className="text-sm font-medium">2 Adults, 0 Child</p>
            </div>
            <span className="text-orange-500 text-lg">👤</span>
          </div>

          {/* Button */}
          <button
            onClick={handleScrollToRooms}
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-lg w-full md:w-auto"
          >
            Find Room
          </button>
        </div>
      </div>
    </div>
  );
}
