import React, { useEffect, useState } from "react";

const useQueryRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [restaurant, setRestaurant] = useState([]);

  const [loading, setLoading] = useState(false);



  useEffect(() => {
    getRestaurants();
    // if (id) {
    //   getRestaurant();
    // }
  }, []);

  const getRestaurants = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/restaurants");
      const result = await response.json();
      setRestaurants(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };


  // const getRestaurant = async (id) => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(`http://localhost:4000/restaurants/${id}`);
  //     const result = await response.json();
  //     setRestaurant(result);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setLoading(false);
  //   }
  // };

  

  return {
    restaurants, restaurant,
    loading
  };
};

export default useQueryRestaurant;
