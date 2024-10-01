'use client'
import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser, FaEllipsisV } from 'react-icons/fa';

const TopBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="w-full h-12 bg-white/5 border border-secondary/50 flex items-center px-4 rounded-md shadow-md">
      {/* Left: Search bar */}
      <div className="flex items-center">
        <FaSearch
          className="text-white cursor-pointer"
          onClick={toggleSearch}
        />
        <input
          type="text"
          className={`ml-2 bg-gray-700 text-white px-2 py-1 rounded transition-width duration-300 ease-in-out ${
            searchOpen ? 'w-[100px]' : 'w-0'
          } overflow-hidden`}
          placeholder="Search..."
        />
      </div>

      {/* Right: Icons */}
      <div className="ml-auto flex items-center space-x-6">
        <FaBell className="text-white cursor-pointer" />
        <FaUser className="text-white cursor-pointer" />
        <FaEllipsisV className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
