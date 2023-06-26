import React, { useState } from 'react'
import logo from '../images/Home/footer_logo.png'
import fb from '../images/Home/footer_facebook.png'
import insta from '../images/Home/footer_insta.png'

const Collapsible = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center pb-2'>
        <h1 className='font-semibold text-sm'>{props.title}</h1>
        <button className={`flex text-3xl lg:hidden transition duration-700 ${isOpen && 'rotate-180'}`} onClick={() => setOpen(!isOpen)}>
          <ion-icon name='caret-down-circle'></ion-icon>
        </button>
      </div>
      <div className={`max-h-0 lg:max-h-fit overflow-hidden transition-all duration-700 ${isOpen && 'max-h-fit mb-5'}`}>
        {props.children}
      </div>
    </div>
  )
}

const ImageLink = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img src={props.image} alt={props.name} className='w-10 h-auto' />
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row justify-evenly py-12 px-5 bg-[#DEC1B9] font-montserrat text-[#9E6B67] text-[0.725rem]'>
      <div className='px-20 m-auto lg:m-0 w-fit text-center order-1 lg:-order-1'>
        <img src={logo} className='m-auto w-40 max-w-full h-auto' />
        &copy; 2020 Table for Juan. All rights reserved
      </div>

      <Collapsible title='Location'>
        Kassel Residences<br />
        Amsterdam Blg., Kassel Residences,<br />
        Brgy. Moonwalk, E. Rodriguez St. Ext.,<br />
        Paranaque City<br />
      </Collapsible>

      <Collapsible title='Find us on'>
        <div className='flex gap-x-2'>
          <ImageLink name="facebook" image={fb} link="https://www.facebook.com/Table.for.Juan"/>
          <ImageLink name="instagram" image={insta} link="https://www.instagram.com/_tableforjuan/"/>
        </div>
      </Collapsible>

      <Collapsible title='Contact Us'>
        +63 9610984068<br />
        tableforjuan@gmail.com<br />
        <button className='px-2 py-1 mt-1 bg-[#9E6B67] text-[#DEC1B9] rounded-md'>Form</button>
      </Collapsible>
    </footer>
  )
}

export default Footer