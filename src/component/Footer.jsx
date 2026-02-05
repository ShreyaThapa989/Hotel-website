import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
    
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Hotel Country Villa
          </h2>
          <p className="mb-2 opacity-90">123 Mountain View Road</p>
          <p className="mb-2 opacity-90">Kathmandu, Nepal</p>
          <p className="mb-2 opacity-90"> +977 01 1234567</p>
          <p className="opacity-90"> info@hotelcountryvilla.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Rooms", "About Us", "Contact", "Booking"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-300 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        

        <div>
          <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
          <p className="mb-4 text-sm leading-relaxed opacity-90">
            Experience premium comfort, serene mountain views, and heartfelt
            hospitality designed to make your stay unforgettable.
          </p>
          <p className="text-xs opacity-70">
            {new Date().getFullYear()} Hotel Country Villa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
