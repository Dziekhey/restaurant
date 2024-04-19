import React from "react";
import cartImg from "../assets/hero.jpg";
import { Chip, IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { wantedIngredients } from "../data/Constants";

const CartCard = () => {
  return (
    <>
      <div className="px-5">
        <div className="lg:flex items-center lg:space-x-5">
          <div>
            <img
              src={cartImg}
              alt="Food Image"
              className="w-[5rem] h-[5rem] object-cover"
            />
          </div>
          <div className="flex items-center text-[#3c2a0c] justify-between lg:w-[70%]">
            <div className="space-y-1 lg:space-y-3 w-full">
              <p>Kenkey</p>
              <div className="flex justify-between ml-8 items-center">
                <div className="flex items-center space-x-1">
                  <IconButton>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <div className="w-5 h-5 text-xs flex items-center justify-center">
                    {5}
                  </div>
                  <IconButton>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <p className="pt-7">GH₵10</p>
          </div>
        </div>
        <div className="pt-3 space-x-2">
          {wantedIngredients.map((item) => (
            <Chip label={item} />
          ))}
        </div>
        <div className="pt-5 lg:flex lg:justify-end">
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#3c2a0c",
            backgroundColor: "#d99e06",
            "&:hover": {
              backgroundColor: "#917617",
            }}}
          >
            Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
