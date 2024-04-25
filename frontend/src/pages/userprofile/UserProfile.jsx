import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
import { useEffect } from "react";

const UserProfile = () => {
  const auth = useAuth();
  const user = localStorage.getItem("userId");
  const userToken = localStorage.getItem("userToken");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const userTelephone = localStorage.getItem("userTelephone");
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut();
  };

  useEffect(() => {
    if (!userToken) navigate("/account/users/login");
  }, []);

  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <AccountCircleIcon sx={{ fontSize: "9rem" }} />
          <h1 className="py-4 text-4xl font-semibold">{userName}</h1>
          <p className="text-2xl">{userEmail}</p>
          <p className="text-2xl pt-4">{userTelephone}</p>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              margin: "2rem 0rem",
              color: "#3c2a0c",
              backgroundColor: "#d99e06",
              "&:hover": {
                backgroundColor: "#917617",
              },
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
