import React from "react";
import { favorites } from "../../data/Constants";
import RestaurantCard from "../../components/cards/RestaurantCard";

const FavoritePage = () => {
  return (
    <>
      <div>
        <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {favorites.map((favorite) => (
            <RestaurantCard />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
