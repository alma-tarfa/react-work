import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image  */}
      <div className="home__row">
      <Product
        id="9438138751"
        title="The Lean Startup: How Constant Innovation creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
      />
      <Product
        id="6941130797"
        title="Aucma Stand Mixer, 6.2 L Stainless Steel Mixing Bowl, 6 Speed 1400W Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (Black)"
        price={109.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/612ZBnygMxL._AC_UY218_.jpg"
      />
      </div>
      
      <div className="home__row">
      <Product
        id="5107726039"
        title="Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery"
        price={199.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UY218_.jpg"
      />
      <Product
        id="24903193724"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={89.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/91B+xrXdD+L._AC_UY218_.jpg"
      />
        <Product
        id="7245453364"
        title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Gray (2nd Generation)"
        price={769.00}
        rating={5}
        image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
      />
      </div>
      <div className="home__row">
      <Product
        id="8463710317"
        title='Samsung 43" TU7000 HDR Smart 4K TV with Tizen OS Black'
        price={329.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/810zKimwNuL._AC_UY218_.jpg"
      />
     
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
