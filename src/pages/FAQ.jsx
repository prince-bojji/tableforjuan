import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQIcon = () => {
  return (
    <div className='w-[20px] h-[0.15rem] bg-[#7BA590] transition-all duration-[600ms] ease-out'></div>
  );
};

const FAQItem = (props) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(props.opened ? ref.current.offsetHeight : 0);
  }, [props.opened]);

  return (
    <div className={`bg-[#9ACEB4] text-[#6d4c44] shadow-md rounded-md px-4 mb-5 transition-all ${props.opened && 'pb-4'}`}>
      <button 
        onClick={props.toggle}
        className='flex justify-between items-center w-full py-4'
      >
        <h3 className='font-semibold'>{props.title}</h3>
        <div className={`transition-all duration-[600ms] ease-out [&>*:nth-child(1)]:-rotate-90 [&>*:nth-child(1)]:translate-y-[2.5px] ${props.opened && '[&>*:nth-child(1)]:rotate-0 [&>*:nth-child(2)]:rotate-180'}`}>
          <FAQIcon />
          <FAQIcon />
        </div>
      </button>
      <div 
        className='text-justify overflow-hidden transition-all duration-[600ms]'
        style={{height}} 
      >
        <div ref={ref}>{props.content}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const navigate = useNavigate();

  const faqItems = [
    {
      title: 'Best Seller',
      content:
        'What’s your bestseller? Our topseller is the Beef in Mushroom Sauce. The second dish that our customers loved to eat is our Baked Bangus.',
    },
    {
      title: 'Allergen Information',
      content:
        'Fried Bangus Allergens: Fish Baked Bangus Allergens: Fish and Dairy Menudo Allergens: Milk Nilaga Allergens: None Ginisang Sayote Allergens: None Pork Sinigang Allergens: None Caldereta Allergens: Milk Korean Beef Stew Allergens: None Beef Broccoli Allergens: None Beef in Mushroom Sauce Allergens: Mushroom',
    },
    {
      title: 'Vegan',
      content: 'Do you serve vegan meals on the menu? Unfortunately, no.',
    },
    {
      title: 'Supplier Information',
      content:
        'Where do you get your supplies/ingredients? Is it from a reputable store/market? Yes, a couple of renowned brands. We get our meat from RareFoods and vegetables, fruits and poultry from Fresh Produce.',
    },
    {
      title: 'Product Care',
      content: 'Ideal product care? Best consumed when it’s hot.',
    },
    {
      title: 'Other',
      content:
        'If you have questions, feel free to ask us by sending a message here.',
    },
  ];

  return (
    <div className='pt-28 py-10 px-5 lg:px-16 bg-[#fff7f4] font-montserrat'>
      <h2 className='text-center font-bold text-[#E79898] text-5xl mb-10'>
        Frequently Asked Questions
      </h2>
      {faqItems.map((faq, index) => (
        <FAQItem 
          key={index} 
          title={faq.title} 
          content={faq.content} 
          opened={selectedTab === index}
          toggle={() => setSelectedTab(selectedTab === index ? null : index)}/>
      ))}
      
      <div className='text-center text-gray-700 pt-5'>
        <p>Feel free to ask by messaging here.</p>
        <button 
          className='border-none bg-[#9ACEB4] hover:bg-[#7db69a] text-[#6d4c44] font-semibold px-8 py-2 text-center inline-block my-5 rounded-full transition duration-200'
          onClick={() => navigate('/ContactUs')}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQ;
