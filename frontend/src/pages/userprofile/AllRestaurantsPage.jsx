import React from 'react'
import useQueryRestaurant from '../../Hooks/useQueryRestaurants';
import ripples from '../../assets/ripples.svg';
import RestaurantCard from '../../components/cards/RestaurantCard';

const AllRestaurantsPage = () => {

  const { restaurants, loading } = useQueryRestaurant();
  return (
   <>
   
    <div className="flex flex-wrap pt-8 px-3 items-center justify-around gap-5">
            {loading ? (
              <img src={ripples} alt="Loading" className='size-96' />
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