import React from "react";
import foodImg from "../assets/hero.jpg";
import { Button, Card } from "@mui/material";

const OrderCard = () => {
  return (
    <>
      <Card className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-5">
          <img src={foodImg} alt="Food Image" className="h-16 w-16 object-cover" />
          <div>
            <p>Kenkey</p>
            <p>GH₵30</p>
          </div>
        </div>
        <di>
            <Button className="cursor-not-allowed" sx={{}} >Completed</Button>
        </di>
      </Card>
    </>
  );
};

export default OrderCard;
