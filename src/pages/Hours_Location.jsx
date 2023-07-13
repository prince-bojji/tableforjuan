import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Hours_Location() {
  return (
    <>
    <Header/>
    <div className='h-full min-h-screen font-montserrat px-0 py-40 bg-[#fff7f4]'>
      <p className='text-center text-[rgb(194,87,87)] text-[4xl] sm:text-[3.5rem] mb-10'>Hours and Location</p>
      <div className='min-h-[calc(100%_-_60px)] mx-auto'>
        <div className='min-h-screen sm:min-w-[70vw] w-9/12 overflow-auto bg-[#9ACEB4] shadow-[0rem_0rem_0_10px_#FFE8E8] mx-auto my-0 p-4 rounded-[3rem_0]'>
          <div className='min-h-full text-[#4E4141] text-[1.2em] not-italic text-center mt-12 mb-0 mx-16'>
            <p className='text-[0.9em] sm:text-[1em] font-semibold mb-6'>
            As of now, we only serve our food via take-aways and deliveries from 
            Monday to Friday. All orders must be made before we prepare meals.
            </p>
            <p className='mb-6 text-[0.8em] sm:text-[1em]'>
            Our one and only main branch is located in 
            </p>
            <address className='text-[0.9em] sm:text-[1em] font-semibold mb-6'>
            Kassel Residences Amsterdam Blg., Kassel Residences, Brgy. Moonwalk, E.
            Rodriguez St. Ext., Paranaque City
            </address>
            <p className='text-[0.9em] sm:text-[1em] font-semibold mb-6'>
              Availability Hours : <br/>
              Mon - Fri : 9:00am - 8:00pm
            </p>
            <div className='max-w-full h-[430px] w-full overflow-hidden mt-0 mb-12 mx-0 min-h-full'>
              <div className='h-full w-full max-w-full min-h-screen'>
                <iframe className='h-full w-full border-0' frameBorder={0} 
                src='https://www.google.com/maps/embed/v1/place?q=Kassel+Residences+-+Amsterdam+Building,+East+Rodriguez+Avenue,+Parañaque,+Metro+Manila,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Hours_Location;