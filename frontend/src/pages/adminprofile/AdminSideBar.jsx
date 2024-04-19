import React from "react";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { adminMenus } from "../../data/Constants";


const AdminSideBar = ({handleClose}) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/adminprofile${item.path}`);

  }

  return (
    <>
      <div>
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          onClose={handleClose}
          open={true}
          anchor="left"
          sx={{ zIndex: 1, position: "sticky"  }}
        >
          <div className="lg:w-[20vw] h-screen flex flex-col bg-amber-200 justify-center text-xl space-y-[1.65rem]">
            {adminMenus.map((item, index) => (
              <>
                <div className="px-5 flex items-center text-[#3c2a0c]  gap-5 py-5 cursor-pointer" onClick={() => handleNavigate(item)}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {index !== adminMenus.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default AdminSideBar;
