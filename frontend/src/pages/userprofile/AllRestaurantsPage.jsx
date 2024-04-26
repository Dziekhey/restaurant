import React from 'react'
import useQueryRestaurant from '../../Hooks/useQueryRestaurants';
import RestaurantCard from '../../components/RestaurantCard';
import ripples from '../../assets/ripples.svg';

const AllRestaurantsPage = () => {

  const { restaurants, loading } = useQueryRestaurant();
  return (
   <>
   
    <div className="flex flex-wrap pt-8 px-3 items-center justify-around gap-5">
            {loading ? (
              <img src={ripples} alt="Loading" />
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))
            )}
          </div>
  
   </>
  )
}

export default AllRestaurantsPage;