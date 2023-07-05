import React from 'react';

function Menu() {
  return (
    <>
      <div id="MENU">
        <h1 id="section">MENU</h1>
        <style>
          {`
            h1 {
              text-align: center;
              color: #E79898;
            }
          `}
        </style>
        <div className="image-grid">
          <div className="image-grid-item reveal">
            <img src="/src/images/Menu/MENU_FRIEDBANGUS1.png" alt="Fried Bangus" />
            <div className="image-caption">FRIED BANGUS</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_MUNGGOSTEW1.png" alt="Munggo Stew" />
            <div className="image-caption">MUNGGO STEW</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_NILAGA1.png" alt="Nilagang Baka" />
            <div className="image-caption">NILAGANG BAKA</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_PORKHUMBA1.png" alt="Pork Humba" />
            <div className="image-caption">PORK HUMBA</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_BAKEDBANGUS1.png" alt="Baked Bangus" />
            <div className="image-caption">BAKED BANGUS</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_MENUDO1.png" alt="Menudo" />
            <div className="image-caption">MENUDO</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_BEEFBROCCOLI1.png" alt="Beef Broccoli" />
            <div className="image-caption">BEEF BROCCOLI</div>
          </div>
          <div className="image-grid-item reveal">
            <img src="/images/Menu/MENU_SAYOTE1.png" alt="Sayote" />
            <div className="image-caption">SAYOTE</div>
          </div>
          <div className="image-grid-item reveal" id="beef">
            <img src="/images/Menu/MENU_BEEFINMUSHROOMSAUCE1.png" alt="Beef in Mushroom Sauce" />
            <div className="image-caption">BEEF IN MUSHROOM SAUCE</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
