import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import sample from "../assets/hero.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <>
      <div>
        <Card style={{ backgroundColor: "#917517" }} className=" w-[18rem] ">
          <div
            className={`${
              true ? "cursor-pointer" : "cursor-not-allowed"
            } relative`}
          >
            <img
              src={sample}
              className="w-full h-[10rem] rounded-t-md object-cover"
            />
            <Chip
              size="small"
              color={true ? "success" : "error"}
              label={true ? "Open" : "Closed"}
              className="absolute top-2 left-2"
            ></Chip>
          </div>
          <div className="p-4 textPart lg:flex w-full justify-between">
            <div className="space-y-1">
              <div className="flex  justify-between">
                <p className="font-semibold pt-2 text-white text-lg">
                  Ghanaian Fast Food
                </p>
                <IconButton className="text-white">
                  {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
              <p className="text-white text-sm">
                Craving it all? Dive into our global fla...
              </p>
              <div></div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RestaurantCard;
