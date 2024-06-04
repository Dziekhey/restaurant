import React, { useEffect, useState } from "react";

const useQueryOrders = (restaurantId, userId) => {
  const [ownerOrders, setOwnerOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/orders`);
      const result = await response.json();
      const restaurant = result.filter((res) => res?.restaurantId == restaurantId);
      setOwnerOrders(restaurant);
      
      const user = result.filter((res) => res?.userId == userId);
      setUserOrders(user);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return {
    ownerOrders,userOrders
  };
};

export default useQueryOrders;
