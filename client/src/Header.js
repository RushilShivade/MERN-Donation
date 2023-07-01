import React from 'react';
import './assets/Header.css';

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 w-auto mr-2" src="/logo.png" alt="Logo" />
          <h1 className="text-white font-bold text-lg">Website Name</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="/">Home</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/about">About Us</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/contact">Contact Us</a>
          </li>
          <li>
            <a className="bg-white text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-full font-semibold" href="/donate">Donate Now</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
