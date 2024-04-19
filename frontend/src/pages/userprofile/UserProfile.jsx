import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import Navbar from "../../components/Navbar";

const UserProfile = () => {
  const handleLogout = () => {
    
  };

  return (
    <>
   
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <AccountCircleIcon sx={{ fontSize: "9rem" }} />
          <h1 className="py-4 text-4xl font-semibold">User's Name</h1>
          <p className="text-2xl">User's Email</p>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{ margin: "2rem 0rem", color: "#3c2a0c",
            backgroundColor: "#d99e06",
            "&:hover": {
              backgroundColor: "#917617",
            } }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
