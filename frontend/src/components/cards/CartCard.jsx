import React, { useState, useEffect } from "react";
import cartImg from "../../assets/hero.jpg";
import { Chip, IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { wantedIngredients } from "../../data/Constants";

const CartCard = () => {
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price based on quantity
    const updatedTotalPrice = number * 10; // Assuming price per item is GH₵10
    setTotalPrice(updatedTotalPrice);
  }, [number]);

  const increaseItem = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseItem = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="px-5">
        <div className="lg:flex items-center lg:space-x-5">
          <div>
            <img
              src={cartImg}
              alt="Kenkey"
              className="w-[5rem] h-[5rem] object-cover"
            />
          </div>
          <div className="flex items-center text-[#3c2a0c] justify-between lg:w-[70%]">
            <div className="space-y-1 lg:space-y-3 w-full">
              <p>Kenkey</p>
              <div className="flex justify-between ml-8 items-center">
                <div className="flex items-center space-x-1">
                  <IconButton onClick={decreaseItem}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <div className="w-5 h-5 text-xs flex items-center justify-center">
                    {number}
                  </div>
                  <IconButton onClick={increaseItem}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <p className="pt-7">GH₵{totalPrice}</p> {/* Display total price */}
          </div>
        </div>
        <div className="pt-3 space-x-2">
          {wantedIngredients.map((item, index) => (
            <Chip key={index} label={item} />
          ))}
        </div>
        <div className="pt-5 lg:flex lg:justify-end">
          <Button
            type="submit"
            variant="contained"
            sx={{
              color: "#3c2a0c",
              backgroundColor: "#d99e06",
              "&:hover": {
                backgroundColor: "#917617",
              },
              fontWeight: 'bold'
            }}
          >
            Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
