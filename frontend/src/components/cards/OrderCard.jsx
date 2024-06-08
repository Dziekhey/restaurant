import React from "react";
import { Button, Card } from "@mui/material";

const OrderCard = ({ order }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-pink-500";
      case "Completed":
        return "bg-green-500";
      case "Failed":
        return "bg-red-500";
    }
  };

  return (
    <>
      <Card className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-7">
          <img
            src={`https://savefiles.org/${order.image}?shareable_link=205`}
            alt="Food Image"
            className="h-16 w-16 object-cover"
          />
          <div>
            <p>{order.restaurant_name}</p>
            <p>{order.foodname}</p>
            <p>GH₵ {order.totalprice}</p>
          </div>
        </div>
        <div>
          <h3
            className={`cursor-not-allowed text-white shadow-md rounded-md font-bold px-3 py-2 ${getStatusClass(
              order.status
            )}`}
          >
            {order.status}
          </h3>
        </div>
      </Card>
    </>
  );
};

export default OrderCard;
