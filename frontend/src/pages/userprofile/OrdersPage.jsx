import React from "react";
import useQueryOrders from "../../Hooks/useQueryOrders";
import OrderCard from "../../components/cards/OrderCard";
import ripples from "../../assets/ripples.svg";

const OrdersPage = () => {
  const UserId = localStorage.getItem("userId");

  const { userOrders, loading } = useQueryOrders(null, UserId);

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
        {loading ? (<img src={ripples} alt="Loading" className="pt-5 text-2xl font-bold size-96" />) : userOrders.length === 0 ? (
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
