import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../images/Home/banner.png';
import friedBangus from '../images/Home/friedbangus.png';
import bakedBangus from '../images/Home/bakedbangus.jpg';
import beefBrocoli from '../images/Home/beef_with_brocoli.jpg';
import beefMushroom from '../images/Home/beef_with_mushroom.jpg';

const BestSeller = props => {
  return (
    <img
      src={props.image}
      className='w-[40rem] h-48 lg:w-72 lg:hover:w-96 lg:h-96 object-cover rounded-lg transition-all duration-700'
    />
  );
};

const Home = () => {
  return (
    <div className='bg-[#fff7f4] font-montserrat'>

      <img src={banner} className='w-screen h-screen object-cover' />
      <div className='flex justify-center items-center w-screen h-[40vh] bg-cover bg-[url("/src/images/Home/wood.png")]'>
        <p className='px-5 font-courgette text-[#9E6B67] text-center text-3xl md:text-5xl'>
          A Family's Passion for Food and Community <br />- Table for Juan
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-[90vw] lg:w-[70vw] h-[60vh] py-10 m-auto overflow-hidden'>
        <img
          src={friedBangus}
          className='hidden lg:block w-full h-full object-cover'
        />
        <div className='flex flex-col justify-center font-semibold text-2xl'>
          <p className='text-[#71A78C]'>
            Kumusta? Table for Juan represents a carinderia for the Juans(one)
            that want to feel the vibes of salo-salo and the authenticity of the
            hapag-kainan served directly for your convenience.
          </p>
          <button className='w-fit px-3 py-1 mt-3 bg-[#9ACEB4] text-[#4E4141] rounded-lg'>
            Learn More
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-screen lg:h-screen px-6 py-10 bg-cover bg-[url("/src/images/Home/best_seller_bg.png")]'>
        <h1 className='font-extrabold text-[#9E6B67] text-5xl'>Best Sellers</h1>
        <div className='flex flex-col lg:flex-row gap-5 mt-10 mb-3'>
          <BestSeller image={bakedBangus} />
          <BestSeller image={beefBrocoli} />
          <BestSeller image={beefMushroom} />
        </div>
        <p className='font-courgette text-[#71A78C] text-center text-2xl'>
          Discover the delicious offering we have everyday of the week.
        </p>
        <button className='w-fit px-3 py-1 mt-3 bg-[#9ACEB4] font-semibold text-[#4E4141] text-xl rounded-lg'>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
