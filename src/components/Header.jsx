import React from 'react'
import logo from '../images/Home/logo.png'
//di pa tapos, not included: mobile responsiveness, hamburger menu
function Header() {

  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");

  // hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // })

  // document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  //   hamburger.classList.remove("active");
  //   navMenu.classList.remove("active");
  // }))

  return (
    <header className ="z-[9] w-full lg:bg-[rgba(222,193,185,0.75)] fixed md:bg-[rgba(222,193,185,1)] md:transition-[0.5s]" >
    <nav className="navbar min-h-[80px] flex justify-between items-center px-6 py-0">
      <img className="navbar-logo w-[120px] cursor-pointer pl-[10]" src={logo} />
      <ul className="nav-menu flex justify-between items-center gap-20 max-[768px]:">
        <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s] '>
          <a href="Home.jsx" className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
            Home
          </a>
        </li>
        <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s]'>
          <a href="About.jsx" className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
            About
          </a>
        </li>
        <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s]'>
          <a href="Menu.jsx" className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
            Menu
          </a>
        </li>
        <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s]'>
          <a href="Hours_Location.jsx" className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
            Hours &amp; Location
          </a>
        </li>
        <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s]'>
          <a href="FAQ.jsx" className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
            FAQs
          </a>
        </li>
      </ul>
      <br />
      <div className="hamburger active lg:hidden cursor-pointer md:block [&>*:nth-child(1)]:active:translate-y-2 [&>*:nth-child(1)]:active:rotate-45 [&>*:nth-child(2)]:active:opacity-0 [&>*:nth-child(3)]:active:-translate-y-2 [&>*:nth-child(3)]:active:-rotate-45">
        <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
        <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
        <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
      </div>
    </nav>
  </header>
  )
}

export default Header;
