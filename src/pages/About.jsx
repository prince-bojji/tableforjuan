import React from 'react'

function About() {
  return (
    <>
  {/* SWIPER */}
  <link rel="stylesheet" href="css/swiper-bundle.min.css" />
  {/* FIRST PANEL */}
  <div className="ourstory sm:w-full">
    <div className="relative w-full overflow-hidden isolate bg-[url('/images/About/news.jpg')] bg-cover bg-no-repeat">
      <div className="after:content-[''] after:absolute after:z-[-1] after:opacity-80 after:inset-0" style={{ background: "rgb(233, 230, 230)" }} />
        <div className="grid grid-cols-2 items-center gap-x-10 mx-auto my-0 p-10 md:p-40 sm:grid-cols-1 sm:gap-y-5 sm:p-10">
          <div className="carousel-container sm:row-2">
            <div className="carousel h-full w-full relative overflow-hidden shadow-[0px_0px_20px_rgba(0,0,0,0.7)] rounded-3xl">
              {/*Slider*/}
              <div className="slider flex max-h-full w-[400%] shrink-0 transition-all duration-[0.5s] ease-[ease]">
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-1" src="/src/images/About/cooking1.jpg" className="object-cover" />
                </section>
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-2" src="/images/About/cooking2.jpg" className="object-cover" />
                </section>
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-3" src="/images/About/cooking4.jpg" className="object-cover" />
                </section>
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-4" src="/images/About/cooking5.jpg" className="object-cover" />
                </section>
              </div>
              {/*Controls*/}
              <div className="controls">
                <span className="arrow prev absolute cursor-pointer left-[30px] top-[90%]">
                  <i className="material-icons text-[35px] text-white">keyboard_arrow_left</i>
                </span>
                <span className="arrow next absolute cursor-pointer right-[30px] top-[90%]">
                  <i className="material-icons text-[35px] text-white">keyboard_arrow_right</i>
                </span>
              </div>
              {/*Description*/}
              <div className="desc h-full bg-[rgba(236,214,211,0.8)] shadow-[0px_0px_20px_rgba(0,0,0,0.4)] p-12 rounded-[10px]">
                <h1 className="text-left text-[#e4acac] -mt-px text-3xl" style={{ fontFamily: "Montserrat" }}>
                  OUR STORY
                </h1>
                <p className="text-justify text-[25px] text-[#363636]">
                  During the pandemic, we aspired to have a successful business to alleviate hunger. My mother's sister presented us with an opportunity, which we eagerly seized. Initially, we planned for a food truck, but without a suitable vehicle, we opted for a food delivery service that caters to Filipinos' preferences for rice and viands. Our family is busy in the morning fulfilling orders and motivated by positive customer feedback. We aim to expand Table for Juan with a bakery and serve more customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  {/*SECOND PANEL */}
  <section className="container bg-[#e5ece9] w-full flex items-center justify-center">
  <div className="testimonial mySwiper relative max-w-[1800px] w-full overflow-hidden px-0 py-[50px]">
    <div className="testi-content swiper-wrapper">
      {/*swiper vision mission*/}
      <div className="slide swiper-slide flex items-center justify-center flex-col gap-y-[30px] h-full w-full">
        <h1 className="text-center mt-[-5px] text-[80px] text-[#E79898]">MISSION</h1>
        <p className="text-center text-[35px] text-[#363636] px-40 py-0 font-Montserrat">
          Our mission is to bring fast, healthy, and affordable food for the people on the go.
          At Table ni Juan, we understand that your time is valuable, and we are confident to offer the foods that made your childhood and makes you feel nostalgic while eating.
        </p>
      </div>
      <div className="slide swiper-slide flex items-center justify-center flex-col gap-y-[30px] h-full w-full">
        <h1 className="text-center mt-[-5px] text-[80px] text-[#E79898]">VISION</h1>
        <p className="text-center text-[35px] text-[#363636] px-40 py-0 font-Montserrat">
          Table for Juan hopes to bring more food on the future menu and make it more accessible for different kinds of people by making an initiative to serve our business closer to the community.
        </p>
      </div>
    </div>
      <div className="swiper-pagination" />
  </div>
  </section>
  {/*THIRD PANEL */}
  <div className="meetcrew h-screen relative overflow-hidden">
  <div className="blurbg absolute w-full h-full z-[-1] opacity-60 left-0 top-0">
    <img src="/images/About/th_bg.jpg" className="th w-full h-full object-cover object-[10%_20%]" />
  </div>
  <div className="th_cont absolute -translate-x-2/4 -translate-y-2/4 flex justify-center items-center left-2/4 top-2/4">
    <div className="text-column flex-1 w-[60rem] h-[75vh] flex flex-col justify-center mt-20 mb-[10vh] mx-20 pr-20">
      <h2 className="text-left text-[#E79898] text-[75px]">BEHIND THE TABLES</h2>
      <h4 className="text-[#AC6868] text-justify text-3xl">
        Step into our culinary world, where flavors come alive. Join us behind the scenes and experience the passion that fuels our kitchen. Indulge in a gastronomic journey like no other at Table for Juan.
      </h4>
    </div>
    {/* SLIDER */}
    <div className="image-column relative w-[65vh] h-[80vh] mt-5 mx-auto my-0 pb-[40%] rounded-[20%]">
      <input type="radio" name="images" id="img1" defaultChecked="" />
      <input type="radio" name="images" id="img2" />
      <input type="radio" name="images" id="img3" />
      <input type="radio" name="images" id="img4" />
      <div className="slide_img" id="one">
        <img src="/images/About/behind.jpg" alt="Image 1" className="w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
        <label htmlFor="img4" className="pre w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[10px_0_0_10px]" />
        <label htmlFor="img2" className="nxt w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[0_10px_10px_0] right-0" />
      </div>
      <div className="slide_img" id="two">
        <img src="/images/About/behind1.jpg" alt="Image 2" className="w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
        <label htmlFor="img1" className="pre w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[10px_0_0_10px] left-0" />
        <label htmlFor="img3" className="nxt w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[0_10px_10px_0] right-0" />
      </div>
      <div className="slide_img" id="three">
        <img src="/images/About/behind2.jpg" alt="Image 3" className="w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
        <label htmlFor="img2" className="pre w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[10px_0_0_10px] left-0" />
        <label htmlFor="img4" className="nxt w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[0_10px_10px_0] right-0" />
      </div>
      <div className="slide_img" id="four">
        <img src="/images/About/behind3.jpg" alt="Image 4" className="w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
        <label htmlFor="img3" className="pre w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[10px_0_0_10px] left-0" />
        <label htmlFor="img1" className="nxt w-[10%] h-full absolute z-[99] cursor-pointer top-0 rounded-[0_10px_10px_0] right-0" />
      </div>
      {/* Add more images here */}
      <div className="nav w-full h-[11px] absolute text-center z-[99] bottom-[10%]">
        <label className="dots w-2.5 h-2.5 relative inline-block mx-1 my-0 rounded-[50%] top-[5px] bg-[rgba(134, 86, 86, 0.8)]" id="dot1" htmlFor="img1" />
        <label className="dots w-2.5 h-2.5 relative inline-block mx-1 my-0 rounded-[50%] top-[5px] bg-[rgba(134, 86, 86, 0.8)]" id="dot2" htmlFor="img2" />
        <label className="dots w-2.5 h-2.5 relative inline-block mx-1 my-0 rounded-[50%] top-[5px] bg-[rgba(134, 86, 86, 0.8)]" id="dot3" htmlFor="img3" />
        <label className="dots w-2.5 h-2.5 relative inline-block mx-1 my-0 rounded-[50%] top-[5px] bg-[rgba(134, 86, 86, 0.8)]" id="dot4" htmlFor="img4" />
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default About;