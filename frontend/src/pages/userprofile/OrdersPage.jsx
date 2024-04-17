import React from "react";
import { orders } from "../../data/Constants";
import OrderCard from "../../components/OrderCard";



const OrdersPage = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-xl text-center py-7 font-semibold">My Oders</h1>
        <div className="space-y-5 w-full lg:w-1/2">
          {
orders.map((order) => <OrderCard />)
          }
          </div>
      </div>
    </>
  );
};

export default OrdersPage;
