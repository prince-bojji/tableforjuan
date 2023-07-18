import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase_setup/firebase';

function ContactUs() {
  const[time, setTime] = useState(new Date())

  const [state, setState] = React.useState({
    email: "",
    message: "",
    name: "",
    number: ""
  });

  const addDbContact = async (e) => {
    e.preventDefault();  
   
    try {
      const docRef = await addDoc(collection(db, "Contact_Us_Form"), {
        contact_email: state.email,
        contact_message: state.message,
        contact_name: state.name,
        contact_num: state.number,
        contact_submit_time: time 
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Successfully Submitted!");
      setState({
        email: "",
        message: "",
        name: "",
        number: ""
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  

  return (
    <>
      <div className='min-h-screen bg-[#fff7f4]'>
      <div className='w-full px-0 py-40 font-montserrat bg-[#fff7f4]'>
      <p className='text-center text-[#C25757] text-[2.8rem] sm:text-[3.5rem]'>CONTACT US</p>
      <p className='text-center text-[1em] mb-[1.3em] sm:text-[1.2em]'>Send us a message and we'll get back to you as soon as possible.<br/>Looking forward to hearing from
        you. </p>
      <form onSubmit={addDbContact} className='w-[60vw] max-w-[500px] min-w-[300px] mx-auto bg-[#9ACEB4] shadow-[0rem_0rem_0_10px_#FFE8E8] 
      text-[#4E4141] my-0 rounded-[3rem_0] mb-0 sm:w-3/5 p-[1.5em]'>
        <div className=' text-gray-700 mt-4 min-h-8 text-sm w-full'>
          <label 
            className='block my-4 text-base mx-0 font-medium'>Name 
            <input 
              id="name" 
              name="name"
              type="text" 
              required
              placeholder="Enter your name"
              value={state.name} 
              onChange={handleChange}
              className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
          <label 
            className='block my-4 text-base mx-0 font-medium'>Email 
            <input 
              id="email" 
              name="email" 
              type="email" 
              required
              value={state.email} 
              onChange={handleChange}
              placeholder="Enter a valid email address" 
              className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
          <label 
            className='block my-4 text-base mx-0 font-medium'>Phone Number 
            <input 
              type="tel" 
              id="number" 
              name="number" 
              required
              value={state.number} 
              onChange={handleChange}
              placeholder="Enter a valid phone number" pattern="[0]{1}[9]{1}[0-9]{9}" 
              className='w-full min-h-[2em] text-sm mt-2.5 mb-0 mx-0 p-2 rounded-[0.8rem] border-none'/></label>
          <label 
            className='block my-4 text-base mx-0 font-medium'>Message
            <textarea 
              required 
              id="message" 
              name="message" 
              rows="10" 
              cols="30" 
              placeholder="Your message"
              value={state.message} 
              onChange={handleChange}
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
  </>
  )
}

export default ContactUs;
