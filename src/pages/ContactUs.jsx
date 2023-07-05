import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ContactUs() {
  return (
    <>
      <Header/>
      <div className='h-full'>
        <div className='w-full px-0 py-40 font-montserrat bg-[#fff7f4]'>
        <p className='text-center text-[#C25757] text-[2.8rem] sm:text-[3.5rem]'>CONTACT US</p>
        <p className='text-center text-[1em] mb-[1.3em] sm:text-[1.2em]'>Send us a message and we'll get back to you as soon as possible.<br/>Looking forward to hearing from
          you. </p>
        <form className='w-[60vw] max-w-[500px] min-w-[300px] mx-auto bg-[#9ACEB4] shadow-[0rem_0rem_0_10px_#FFE8E8] 
        text-[#4E4141] my-0 rounded-[3rem_0] mb-0 sm:w-3/5 p-[1.5em]'>
          <div className=' text-gray-700 mt-4 min-h-8 text-sm w-full'>
            <label 
              for="name" 
              className='block my-4 text-base mx-0 font-medium'>Name 
              <input 
                id="name" 
                name="name"
                type="text" 
                required
                placeholder="Enter your name" 
                className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
            <label 
              for="email" 
              className='block my-4 text-base mx-0 font-medium'>Email 
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                placeholder="Enter a valid email address" 
                className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
            <label 
              for="number" 
              className='block my-4 text-base mx-0 font-medium'>Phone Number 
              <input 
                type="tel" 
                id="number" 
                name="number" 
                required
                placeholder="Enter a valid phone number" pattern="[0]{1}[9]{1}[0-9]{9}" 
                className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
            <label 
              for="message" 
              className='block my-4 text-base mx-0 font-medium'>Message
              <textarea 
                required 
                id="message" 
                name="message" 
                rows="10" 
                cols="30" 
                placeholder="Your message"
                className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none resize-none overflow-auto'></textarea>
            </label>
          </div>
          <input 
            type="submit" 
            value="SUBMIT" 
            className='min-h-[2em] text-sm mt-2.5 mb-0 p-2 rounded-[0.8rem] border-none
            font-bold block w-2/5 h-[2.2em] text-[1.1rem] min-w-[200px] bg-white 
            text-black duration-0.4 mx-auto my-[1.2em] px-0 hover:bg-[#ebebeb]'/>
        </form>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default ContactUs;