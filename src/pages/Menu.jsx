import React from 'react';

const MenuItem = (props) => {
  return (
    <div className="image-grid-item flex flex-col items-center text-center transition duration-500 ease-in-out group hover:scale-110">
      <img
        src={props.image}
        alt={props.alt}
        className="w-1/2 h-auto rounded-full ring-4 ring-transparent hover:ring-rose-500"
      />
      <div className="image-caption text-rose-500 text-lg font-montserrat font-normal pb-8 mt-10 border-b-2 border-rose-500">
        {props.caption}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <div className="bg-[#FFE8E8] min-h-screen pb-16">
        <div id="MENU" className="text-center pt-16 px-4 sm:px-8 bg-FFE8E8">
          <h1
            id="section"
            className="mb-10 inline-block text-[#E79898] font-montserrat font-bold text-4xl sm:text-5xl"
          >
            MENU
          </h1>
          <div className="image-grid grid grid-cols-2 sm:grid-cols-3 gap-12">
            <MenuItem
              image="/src/images/Menu/MENU_FRIEDBANGUS1.png"
              alt="Fried Bangus"
              caption="FRIED BANGUS"
            />
            <MenuItem
              image="/src/images/Menu/MENU_MUNGGOSTEW1.png"
              alt="Munggo Stew"
              caption="MUNGGO STEW"
            />
            <MenuItem
              image="/src/images/Menu/MENU_NILAGA1.png"
              alt="Nilagang Baka"
              caption="NILAGANG BAKA"
            />
            <MenuItem
              image="/src/images/Menu/MENU_PORKHUMBA1.png"
              alt="Pork Humba"
              caption="PORK HUMBA"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BAKEDBANGUS1.png"
              alt="Baked Bangus"
              caption="BAKED BANGUS"
            />
            <MenuItem
              image="/src/images/Menu/MENU_MENUDO1.png"
              alt="Menudo"
              caption="MENUDO"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BEEFBROCCOLI1.png"
              alt="Beef Broccoli"
              caption="BEEF BROCCOLI"
            />
            <MenuItem
              image="/src/images/Menu/MENU_SAYOTE1.png"
              alt="Sayote"
              caption="SAYOTE"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BEEFINMUSHROOMSAUCE1.png"
              alt="Beef in Mushroom Sauce"
              caption="BEEF IN MUSHROOM SAUCE"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
