import React from "react";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { navigations } from "../../data/Constants";
import { useNavigate } from "react-router-dom";


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
          <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col bg-[#536d1b] space-y-8 text-xl gap-8 justify-center pt-24">
            {navigations.map((navigation, index) => (
              <>
                <div key={index}
                  onClick={() => handleNavigate(navigation)}
                  className="px-5 text-white flex space-x-5 cursor-pointer"
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
