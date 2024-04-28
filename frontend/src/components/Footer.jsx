import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-[#536d1b] text-white">
          <div className="container mx-auto px-20 lg:px-20 pt-20 flex flex-col gap-5 md:flex-row justify-between border-t border-slate-800">
            <div className="flex">
              <img src={logo} className="w-64 h-64" />
            </div>

            <div className="pt-10">
              <p>QUICK LINKS</p>

              <div className="flex flex-col text-start mb-4 md:mb-0">
                <Link to="/account/admin/register">
                  <div className="flex cursor-pointer">
                    <IconButton>
                      <HowToRegIcon sx={{ color: "white" }} />
                    </IconButton>
                    <h1 className="pt-2">Register for your Restaurant</h1>
                  </div>
                </Link>
                <Link to="/account/admin/login">
                  <div className="flex cursor-pointer">
                    <IconButton>
                      <LoginIcon sx={{ color: "white" }} />
                    </IconButton>
                    <h1 className="pt-2">Login to your restaurant's dashboard</h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pt-10">
              <p>CONTACT INFORMATION</p>
              <div className="flex">
                    <IconButton disableFocusRipple>
                      <CallIcon sx={{ color: "white" }} />
                    </IconButton>
                    <h1 className="pt-2">+233 54 567 8997</h1>
                  </div>
              <div className="flex">
                    <IconButton disableFocusRipple>
                      <EmailIcon sx={{ color: "white" }}/>
                    </IconButton>
                    <h1 className="pt-2">bitehub@gmail.com</h1>
                  </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <span className="text-white pb-8">
              BiteHub &copy; 2024
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
