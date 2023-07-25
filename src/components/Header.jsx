import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Home/logo.png';

const NavLink = (props) =>{
  const { pathname } = useLocation();

  return (  
    <li className='group z-1 list-style-none inline-block mx-0 my-4 w-fit'>
      <Link to ={props.link} className={`nav-link font-montserrat font-medium transition-all duration-500 group-hover:text-[#7BA590] ${pathname === props.link ? 'text-[#7BA590]' : 'text-[#8F584B]'}`}>
        {props.children}
      </Link>
      <div className={`group-hover:max-w-full bg-[#7BA590] h-[3px] rounded-full transition-all duration-500 ${pathname === props.link ? 'max-w-full' : 'max-w-0'}`}></div>
     </li>
  );
};

const HamburgerLine = () =>{
  return (
    <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
  );
};

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [getWindowSize]);
  
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function NavMenuList(){
    return (
      <ul 
        className={`flex items-center ${windowSize.innerWidth >= 1024 ? 'flex-row gap-20' :
        'z-[2] fixed top-0 left-0 gap-0 flex-col bg-[rgba(222,193,185,0.75)] w-full h-auto text-center backdrop-blur-[2.5px] overflow-hidden ease-in-out duration-500 ' + 
        (isActive ? 'translate-y-0 py-4 top-[80px]' : '-translate-y-full')}`}
      >
        <NavLink link="/">Home</NavLink>
        <NavLink link='/About'>About</NavLink>
        <NavLink link="/Menu">Menu</NavLink>
        <NavLink link="/Hours_Location">Hours &amp; Location</NavLink>
        <NavLink link="/FAQ">FAQ</NavLink>
      </ul>
    );
  }

  return (
    <header className ="z-[10] w-full lg:bg-[rgba(222,193,185,0.75)] fixed bg-[rgba(222,193,185,1)] lg:transition" >
    <nav className=" min-h-[80px] flex justify-between items-center pl-5 lg:pr-[133px] pr-5 py-0">
      <Link to='/'>
        <img className="navbar-logo w-[120px] cursor-pointer pl-[10]" src={logo} />
      </Link>
      <NavMenuList></NavMenuList>
      
      <br />
      <div onClick={handleToggle} className={`z-[10] lg:hidden cursor-pointer md:block ${isActive ? '[&>*:nth-child(1)]:translate-y-2 [&>*:nth-child(1)]:rotate-45 [&>*:nth-child(2)]:opacity-0 [&>*:nth-child(3)]:-translate-y-2 [&>*:nth-child(3)]:-rotate-45': ' '}`}>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
        </div>
    </nav>
  </header>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default Header;
