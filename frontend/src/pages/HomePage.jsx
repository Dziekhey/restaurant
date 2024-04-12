import React from "react";
import Hero from "../components/Hero";
import { restaurants } from "../data/Constants.jsx";
import RestaurantCard from "../components/RestaurantCard.jsx";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white py-3">
            Order from our handpicked favorites
          </h1>
          <div>
            {
                restaurants.map((restaurant) => <RestaurantCard />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
