import React from "react";
import Hero from "../../components/hero/Hero.jsx";
import { restaurants } from "../../data/Constants.jsx";
import RestaurantCard from "../../components/RestaurantCard.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
    <Navbar />
      <div>
        <div>
          <Hero />
        </div>
        <div className="px-16 lg:px-26 py-8">
          <h1 className="text-2xl font-semibold text-white pb-5">
            Order from our handpicked favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around gap-5">
            {
                restaurants.map((restaurant) => <RestaurantCard />)
            }
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
