import React from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton } from "@mui/material";
import { green, yellow } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <div className="px-5 z-50 py-[.8rem] lg:px-20 flex bg-[#d3c81f] justify-between">
        <div className="1g:mr-10 cursor-pointer flex items-center space-x-4">
          <li className="logo text-white font-semibold text-2xl">BiteHub</li>
        </div>
        <div className="flex items-center space-x-2 1g:space-x-10">
          <div className="">
            <IconButton>
              <SearchIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </div>
          <div className="">
            <Avatar sx={{ bgcolor: "white", color: green.A100 }}>S</Avatar>
          </div>
          <div className="">
            <IconButton>
              <Badge color="success" badgeContent={3}>
                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
