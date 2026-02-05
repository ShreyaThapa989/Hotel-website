import React from "react";

const NavLinks = [
  { title: "About", url: "/about" },
  { title: "Rooms & Suites", url: "/room" },
  { title: "Amenities", url: "/amenities" },
  { title: "Dining", url: "/dining" },
  { title: "Contact", url: "/contact" },
];

function Header() {
  return (
    <header className="max-w-7xl mx-auto mt-4 px-6">
      <div className="flex items-center justify-between bg-white shadow-md rounded-2xl py-3 px-6">
     
        <div className="flex items-center gap-2">
          <img src="./logo.jpg" alt="Hotel Logo" className="h-8" />
          <span className="text-lg font-semibold tracking-wide">
            Country Villa
          </span>
        </div>

       
        <nav className="flex gap-8">
          {NavLinks.map((el, indx) => (
            <a
              href={el.url}
              key={indx}
              className="text-gray-700 font-medium hover:text-indigo-600 transition duration-200"
            >
              {el.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
