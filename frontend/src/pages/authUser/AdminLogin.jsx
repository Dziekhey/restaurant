import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../services/useAuth";

const AdminLogin = () => {
  const navigate = useNavigate();

   const auth = useAuth();
  const loginOwner = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);

     auth.loginOwnerAction({
       email: formData.get("email"),
       password: formData.get("password"),
     });
  };

  return (
    <>
    <Navbar/>
    <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="h-auto w-auto p-8 mt-20 flex flex-col justify-center shadow-md items-center text-center">
          <Typography variant="h5" sx={{fontWeight: 'bold'}} className="text-center text-[#3c2a0c] font-bold">
            Owners' Login
          </Typography>
          <form onSubmit={loginOwner}>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              color="warning"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              color="warning"
            />
            <Button
              fullWidth
              className="font-semibold"
              type="submit"
              sx={{
                mt: 2,
                padding: "1rem",
                color: "dark",
                backgroundColor: "#536d1b",
                "&:hover": {
                  backgroundColor: "#bda915",
                },
              }}
              variant="contained"
            >
              Login
            </Button>
          </form>
          <div className="flex mt-10 space-x-4">
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, color: "#3c2a0c" }}
            >
              Don't have an account?
            </Typography>
            <Button
              size="small"
              variant="outlined"
              color="error"
              sx={{ pt: 1, color: "#3c2a0c" }}
              onClick={() => navigate("/account/admin/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
