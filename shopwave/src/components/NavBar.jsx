import logo from '../assets/resources/logo.svg';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#FAFAFA] shadow-md p-4 relative z-20">
      
      <div className="flex items-center justify-between">
       
        <img src={logo} alt="Logo" className="w-16 h-auto" />

        
        <div
          className="text-2xl md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
      </div>

     
      <ul
        className={`flex flex-col md:flex-row md:gap-6 gap-4 overflow-hidden transition-all duration-200 ease-in-out
        ${menuOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"} 
        md:max-h-none md:opacity-100 md:mt-0 md:flex`}
      >
        <li className="cursor-pointer hover:text-gray-500 bellota ">Home</li>
        <li className="cursor-pointer hover:text-gray-500 bellota ">About</li>
        <li className="cursor-pointer hover:text-gray-500 bellota ">Services</li>
        <li className="cursor-pointer hover:text-gray-500 bellota ">Contact</li>
      </ul>
    </nav>
  );
};
