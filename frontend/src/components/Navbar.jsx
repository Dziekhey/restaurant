import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png'


const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="px-5 h-16 sticky top-0 z-50 py-[.8rem] lg:px-20 flex bg-amber-400 justify-between">
        <Link to="/homepage">
          <div className="1g:mr-10 cursor-pointer flex items-center space-x-4">
            <li className="logo text-white font-semibold text-2xl">BiteHub</li>
          </div>
        </Link>
        <div className=" flex items-center space-x-2 1g:space-x-10">
          <div className="flex mx-6 cursor-pointer ">
            <IconButton>
              <SearchIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
            <h1 className="pt-2">Search</h1>
          </div>
          <Link to="/">
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
          <span
  onClick={() => setShowMenu(true)}
  className="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
>
  <MenuIcon sx={{color:'#3c2a0c'}} />
</span>

        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-amber-200 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                 Where Flavor Meets Convenience.......Order In, Pick Up In Minutes
                </p>
              </div>
              <ul className="flex flex-col gap-4">
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
              </ul>
              <div className="flex flex-col gap-4">
                
              </div>
              <span
      onClick={() => setShowMenu(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-white duration-300 text-2xl cursor-pointer"
    >
      <CloseIcon />
    </span>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
