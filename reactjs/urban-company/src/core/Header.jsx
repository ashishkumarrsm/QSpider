import React from "react";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle, FaSearch,FaAngleDown  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="flex justify-around items-center px-8 py-3 border-b shadow-sm sticky top-0 bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <a href="#">
          <img
            src="../src/assets/Logo-Header.webp"
            alt="Logo"
            className="w-24 h-auto"
          />
        </a>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Beauty</a></li>
          <li><a href="#" className="hover:text-blue-600">Revamp</a></li>
          <li><a href="#" className="hover:text-blue-600">Navtie</a></li>
        </ul>
      </div>

      {/* Middle Section */}
      <div className="hidden lg:flex gap-4 items-center  ">
        {/* Location Dropdown */}
        <div className="relative flex items-center">
          <CiLocationOn className="absolute left-3 text-gray-500" size={20} />
          <select
            name="location"
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white w-sm"
          >
            <option value="" disabled hidden selected >Select Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
          </select>
          <FaAngleDown className="absolute right-5 text-gray-500" size={20} />
        </div>

        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-60"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-gray-700">
        <IoMdCart size={28} className="cursor-pointer hover:text-blue-600" />
        <FaRegUserCircle size={28} className="cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
};

export default Header;
