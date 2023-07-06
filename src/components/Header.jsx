import React from 'react'
import logo from '../images/Home/logo.png'

const isMobile = window.screen.width < 768

const NavLink = (props) =>{
  return (  
    <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s] '>
      <a href={props.link} className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
        {props.children}
      </a>
     </li>
  )

}

const HamburgerLine = () =>{
  return (
    <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
  )

}


function Header() {

  return (
    <header className ="z-[9] w-full lg:bg-[rgba(222,193,185,0.75)] fixed md:bg-[rgba(222,193,185,1)] md:transition-[0.5s]" >
    <nav className="navbar min-h-[80px] flex justify-between items-center px-6 py-0">
      <img className="navbar-logo w-[120px] cursor-pointer pl-[10]" src={logo} />
      <ul className="nav-menu flex justify-between items-center gap-20 max-[768px]:">
        <NavLink link="Home.jsx">
          Home
        </NavLink>
        <NavLink link="About.jsx">
          About
        </NavLink>
        <NavLink link="Menu.jsx">
        Menu
        </NavLink>
        <NavLink link="Hours_Location.jsx">
          Hours &amp; Location
        </NavLink>
        <NavLink link="FAQ.jsx">
        FAQ
        </NavLink>
      </ul>
      <br />
      <div className="hamburger lg:hidden cursor-pointer md:block [&>*:nth-child(1)]:active:translate-y-2 [&>*:nth-child(1)]:active:rotate-45 [&>*:nth-child(2)]:active:opacity-0 [&>*:nth-child(3)]:active:-translate-y-2 [&>*:nth-child(3)]:active:-rotate-45">
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
        </div>
    </nav>
  </header>
  )
}

export default Header;
