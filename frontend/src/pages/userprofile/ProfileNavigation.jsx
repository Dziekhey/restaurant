import React from "react";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { navigations } from "../../data/Constants";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const handleNavigate = (navigation) => {
    navigate(`/userprofile/${navigation.title.toLowerCase()}`);
  };

  return (
    <>
      <div>
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          onClose={handleClose}
          open={isSmallScreen ? open : true}
          anchor="left"
          sx={{ zIndex: -1, position: "sticky" }}
        >
          <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col bg-amber-200 justify-center text-xl gap-8 pt-16">
            {navigations.map((navigation, index) => (
              <>
                <div
                  onClick={() => handleNavigate(navigation)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                >
                  {navigation.icon}
                  <span>{navigation.title}</span>
                </div>
                {index !== navigations.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </Drawer>
      </div>
      
    </>
  );
};

export default ProfileNavigation;
