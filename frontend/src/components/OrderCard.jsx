import React from "react";
import foodImg from "../assets/hero.jpg";
import { Button, Card } from "@mui/material";

const OrderCard = ({order}) => {
  return (
    <>
      <Card className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-7">
          <img src={foodImg} alt="Food Image" className="h-16 w-16 object-cover" />
          <div>
            <p>{order.restaurant_name}</p>
            <p>{order.foodname}</p>
            <p>GH₵ {order.totalprice}</p>
          </div>
        </div>
        <di>
            <Button className="cursor-not-allowed" variant="contained" sx={{backgroundColor: '#bda915'}}>{order.status}</Button>
        </di>
      </Card>
    </>
  );
};

export default OrderCard;
