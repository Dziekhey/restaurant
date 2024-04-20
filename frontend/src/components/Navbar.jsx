import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton } from "@mui/material";
import { green } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-5 h-16 sticky top-0 z-50 py-[.8rem] lg:px-20 flex bg-amber-400 justify-between">
        <Link to="/homepage">
          <div className="1g:mr-10 cursor-pointer flex items-center space-x-4">
            <li className="logo text-white font-semibold text-2xl">BiteHub</li>
          </div>
        </Link>
        <div className="flex items-center space-x-2 1g:space-x-10">
          <div className="flex mx-6 cursor-pointer">
            <IconButton>
              <SearchIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
            <h1 className="pt-2">Search</h1>
          </div>
          <Link to="/homepage">
            <div className="flex mx-6 cursor-pointer">
              <IconButton>
                <HomeIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
              <h1 className="pt-2">Home</h1>
            </div>
          </Link>
          <div
            onClick={() => navigate("/userprofile/")}
            className="flex mx-6 cursor-pointer"
          >
            <div>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </div>
            <h1 className="pt-2">Profile</h1>
          </div>
          <Link to="/cart">
            <div className="flex mx-6 cursor-pointer">
              <IconButton>
                <Badge color="success" badgeContent={3}>
                  <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                </Badge>
              </IconButton>
              <h1 className="pt-2">Cart</h1>
            </div>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
