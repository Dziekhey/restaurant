import React from "react";
import Hero from "../../components/hero/Hero.jsx";
import { restaurants } from "../../data/Constants.jsx";
import RestaurantCard from "../../components/RestaurantCard.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import useQueryRestaurant from "../../Hooks/useQueryRestaurants.js";
import ripples from "../../assets/ripples.svg";
import { Link } from "react-router-dom";
import EventSwiper from "./EventSwiper.jsx";

const HomePage = () => {
  const { restaurants, loading } = useQueryRestaurant();

  return (
    <>
      <Navbar />
      <div>
        <div>
          <Hero />
        </div>
        <div className="py-16">
          <EventSwiper />
        </div>
        <div className="px-16 lg:px-26 py-8">
          <h1 className="text-4xl font-semibold text-brown pb-5">
            Place an order from our handpicked favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around gap-5">
            {loading ? (
              <img src={ripples} alt="Loading" />
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
