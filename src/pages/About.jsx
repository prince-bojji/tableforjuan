import React from 'react';
import { Carousel } from 'flowbite-react';

const SecondPanel = (props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-[20px] h-full w-full">
      <h1 className="text-center text-5xl md:text-7xl 2xl:text-9xl text-[#E79898] font-semibold font-montserrat">{props.name}</h1>
      <p className="border-t-2 border-[#363636] max-w-[70vw] text-center text-base md:text-xl 2xl:text-4xl text-[#363636] pt-6 font-montserrat">
        {props.children}
      </p>
    </div>
  );
};

const CarouselButton = ({ isLeft, color }) => {
  return (
    <div className={`opacity-60 text-4xl md:text-5xl transition-all hover:opacity-100 cursor-pointer`} style={{color: color}}>
      <ion-icon name={`${isLeft ? 'caret-back-circle' : 'caret-forward-circle'}`}></ion-icon>
    </div>
  );
};

const About = () => {
  const story = [
    '/src/images/About/cooking1.jpg',
    '/src/images/About/cooking2.jpg',
    '/src/images/About/cooking3.jpg',
    '/src/images/About/cooking4.jpg',
    '/src/images/About/cooking5.jpg',
  ];

  const behind = [
    '/src/images/About/behind.jpg',
    '/src/images/About/behind1.jpg',
    '/src/images/About/behind2.jpg',
    '/src/images/About/behind3.jpg',
  ];

  return (
    <div className=' '>  
      {/* FIRST PANEL */}
      <section className="w-full">
        <div className="h-screen w-full relative">
          <Carousel indicators={false} leftControl={<div></div>} rightControl={<div></div>}>
            {story.map((image, i) => (<img key={i} src={image} className='w-full h-full object-cover' />))}
          </Carousel>
          <div className="absolute inset-0 h-full pt-[80px] flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-[2px]">
            <div className="h-full lg:h-fit flex flex-col justify-center items-center gap-9 p-6 sm:p-12 bg-[#fff7f4] bg-opacity-70 mx-auto max-w-[600px] 2xl:w-[50vw]">
              <h1 className="text-center text-[#9E6B67] text-5xl sm:text-7xl 2xl:text-9xl font-courgette">
                Our Story
              </h1>
              <p className="text-justify text-base sm:text-xl 2xl:text-4xl text-[#363636] font-montserrat">
                During the pandemic, we aspired to have a successful business to alleviate hunger. My mother's sister presented us with an opportunity, which we eagerly seized. Initially, we planned for a food truck, but without a suitable vehicle, we opted for a food delivery service that caters to Filipinos' preferences for rice and viands. Our family is busy in the morning fulfilling orders and motivated by positive customer feedback. We aim to expand Table for Juan with a bakery and serve more customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*SECOND PANEL */}
      <section className="h-screen bg-[#e5ece9] w-full flex items-center justify-center">
        <Carousel indicators={false} slide={false} leftControl={<CarouselButton isLeft={true} color={'#7BA590'} />} rightControl={<CarouselButton isLeft={false} color={'#7BA590'} />} >
          <SecondPanel name="Mission">
            Our mission is to bring fast, healthy, and affordable food for the people on the go.
            At Table ni Juan, we understand that your time is valuable, and we are confident to offer the foods that made your childhood and makes you feel nostalgic while eating.
          </SecondPanel>
          <SecondPanel name="Vision">
            Table for Juan hopes to bring more food on the future menu and make it more accessible for different kinds of people by making an initiative to serve our business closer to the community.
          </SecondPanel>
        </Carousel>
      </section>
      {/*THIRD PANEL */}
      <section className='flex justify-center min-h-screen relative w-full bg-cover bg-center bg-[url("/src/images/About/th_bg.jpg")] overflow-hidden'>
        <div className='absolute w-full h-full bg-[#fff7f4] bg-opacity-70'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 2xl:gap-20 items-center w-[90vw] lg:w-[70vw] min-h-[70vh] py-10 px-5 m-auto overflow-hidden z-0'>
          <div className='flex flex-col font-montserrat justify-center gap-3 xl:gap-8'>
            <h2 className="text-left text-[#E79898] text-5xl sm:text-7xl 2xl:text-9xl font-bold">Behind the Table</h2>
            <p className='text-[#AC6868] text-justify text-base sm:text-xl 2xl:text-4xl'>
              Step into our culinary world, where flavors come alive. Join us behind the scenes and experience the passion that fuels our kitchen. Indulge in a gastronomic journey like no other at Table for Juan.
            </p>
          </div>
          <Carousel leftControl={<CarouselButton isLeft={true} color={'#FBEAEA'} />} rightControl={<CarouselButton isLeft={false} color={'#FBEAEA'} />} className='hidden lg:block' >
            {behind.map((image, i) => (<img key={i} src={image} className='w-full h-full object-cover' />))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default About;