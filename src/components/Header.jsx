import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/Home/logo.png'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-10 w-full bg-opacity-75 bg-[#dec1b9] mb-5">
      <nav className="flex justify-between items-center p-6">
        <img src={logo} alt="logo" className="w-24 cursor-pointer" />

        <ul className={`${open ? '' : 'hidden'} sm:flex gap-20 text-[#8F584B]`}>
          {['Home', 'About', 'Menu', 'Hours & Location', 'FAQs'].map(page => (
            <li key={page} onClick={() => setOpen(false)} className="relative group cursor-pointer">
              <a href={`/${page.toLowerCase().replace(/\s+/g, '')}`} className="font-montserrat transition-colors duration-700 hover:text-[#009688]">
                {page}
              </a>
              <div className="h-[3px] w-0 bg-[#9ACEB4] absolute left-0 bottom-[-5px] transition-all duration-500 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        <div onClick={() => setOpen(!open)} className="sm:hidden cursor-pointer">
          {open ? <FaTimes className="text-[#8F584B]" /> : <FaBars className="text-[#8F584B]" />}
        </div>
      </nav>
    </header>
  );
}

