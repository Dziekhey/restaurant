import React from "react";
import { orders } from "../../data/Constants";
import OrderCard from "../../components/OrderCard";
import Footer from "../../components/Footer";
import useQueryOrders from "../../Hooks/useQueryOrders";

const OrdersPage = () => {
  const UserId = localStorage.getItem("userId");


  const { userOrders} = useQueryOrders(null, UserId);

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-xl text-center py-7 font-semibold">My Oders</h1>
        <div className="space-y-5 w-full lg:w-1/2">
          {userOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
