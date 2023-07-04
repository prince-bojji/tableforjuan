import React from 'react'

function About() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Courgette&family=Montserrat"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/headerfooter.css" />
  <link rel="stylesheet" href="css/about.css" />
  <title>Table ni Juan | About</title>
  {/* SWIPER */}
  <link rel="stylesheet" href="css/swiper-bundle.min.css" />
  <header-component />
  {/* FIRST PANEL */}
  <div className="ourstory">
    <div className="newspaper">
      <div className="box-area">
        <div className="carousel-container">
          <div className="carousel">
            <div className="slider">
              <section>
                <img id="slide-1" src="/images/About/cooking1.jpg" />
              </section>
              <section>
                <img id="slide-2" src="/images/About/cooking2.jpg" />
              </section>
              <section>
                <img id="slide-3" src="/images/About/cooking4.jpg" />
              </section>
              <section>
                <img id="slide-4" src="/images/About/cooking5.jpg" />
              </section>
            </div>
            <div className="controls">
              <span className="arrow prev">
                <i className="material-icons">keyboard_arrow_left</i>
              </span>
              <span className="arrow next">
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
            </div>
          </div>
        </div>
        <div className="desc">
          <h1 className="text1">OUR STORY</h1>
          <p className="text2">
            During the pandemic, we aspired to have a successful business to
            alleviate hunger. My mother's sister presented us with an
            opportunity, which we eagerly seized. Initially, we planned for a
            food truck, but without a suitable vehicle, we opted for a food
            delivery service that caters to Filipinos' preferences for rice and
            viands. Our family is busy in the morning fulfilling orders and
            motivated by positive customer feedback. We aim to expand Table for
            Juan with a bakery and serve more customers.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* SECOND PANEL */}
  <section className="container">
    <div className="testimonial mySwiper">
      <div className="testi-content swiper-wrapper">
        <div className="slide swiper-slide">
          <h1>MISSION</h1>
          <p>
            Our mission is to bring fast, healthy, and affordable food for the
            people on the go. At Table ni Juan, we understand that your time is
            valuable, and we are confident to offer the foods that made your
            childhood and makes you feel nostalgic while eating.
          </p>
        </div>
        <div className="slide swiper-slide">
          <h1>VISION</h1>
          <p>
            Table for Juan hopes to bring more food on the future menu and make
            it more accessible for different kinds of people by making an
            initiative to serve our business closer to the community.
          </p>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
  {/* Swiper JS */}
  {/* JavaScript */}
  {/* THIRD PANEL */}
  <div className="meetcrew">
    <div className="blurbg">
      <img src="/images/About/th_bg.jpg" className="th" />
    </div>
    <div className="th_cont">
      <div className="text-column">
        <h2>BEHIND THE TABLES</h2>
        <h4>
          Step into our culinary world, where flavors come alive. Join us behind
          the scenes and experience the passion that fuels our kitchen. Indulge
          in a gastronomic journey like no other at Table for Juan.{" "}
        </h4>
      </div>
      {/* SLIDER */}
      <div className="image-column">
        <input type="radio" name="images" id="img1" defaultChecked="" />
        <input type="radio" name="images" id="img2" />
        <input type="radio" name="images" id="img3" />
        <input type="radio" name="images" id="img4" />
        <div className="slide_img" id="one">
          <img src="/images/About/behind.jpg" alt="Image 1" />
          <label htmlFor="img4" className="pre" />
          <label htmlFor="img2" className="nxt" />
        </div>
        <div className="slide_img" id="two">
          <img src="/images/About/behind1.jpg" alt="Image 2" />
          <label htmlFor="img1" className="pre" />
          <label htmlFor="img3" className="nxt" />
        </div>
        <div className="slide_img" id="three">
          <img src="/images/About/behind2.jpg" alt="Image 3" />
          <label htmlFor="img2" className="pre" />
          <label htmlFor="img4" className="nxt" />
        </div>
        <div className="slide_img" id="four">
          <img src="/images/About/behind3.jpg" alt="Image 4" />
          <label htmlFor="img3" className="pre" />
          <label htmlFor="img1" className="nxt" />
        </div>
        {/* Add more images here  */}
        <div className="nav">
          <label className="dots" id="dot1" htmlFor="img1" />
          <label className="dots" id="dot2" htmlFor="img2" />
          <label className="dots" id="dot3" htmlFor="img3" />
          <label className="dots" id="dot4" htmlFor="img4" />
        </div>
      </div>
    </div>
  </div>
  {/* FOOTER */}
  <footer-component />
</>
  )
}

export default About;
