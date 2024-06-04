import React from "react";
import { orders } from "../../data/Constants";
import OrderCard from "../../components/OrderCard";
import Footer from "../../components/Footer";
import useQueryOrders from "../../Hooks/useQueryOrders";

const OrdersPage = () => {
  const UserId = localStorage.getItem("userId");

  const { userOrders } = useQueryOrders(null, UserId);

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
        {userOrders.length === 0 ? (
          <p className="pt-5 text-2xl font-bold">You haven't ordered yet</p>
        ) : (
          <div className="space-y-5 w-full lg:w-1/2">
            {userOrders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersPage;
