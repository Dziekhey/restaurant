import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();

  const loginOwner = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    try {
      // Post form data to the backend
      const response = await fetch(
        'http://localhost:4000/owners/login',
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password")
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        const data = await response.json();
        toast.error(data.error);
      } else {
       toast.success("Login was successful");
       navigate("/account/admin/restaurant-form")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
    <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="h-auto w-auto p-8 mt-20 flex flex-col justify-center shadow-md items-center text-center">
          <Typography variant="h5" sx={{fontWeight: 'bold'}} className="text-center text-[#3c2a0c] font-bold">
            Login
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
              sx={{color: "#3c2a0c"}}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
             sx={{color: "#3c2a0c"}}
            />
            <Button
              fullWidth
              className="font-semibold"
              type="submit"
              sx={{
                mt: 2,
                padding: "1rem",
                color: "#3c2a0c",
                backgroundColor: "#d99e06",
                "&:hover": {
                  backgroundColor: "#917617",
                }, fontWeight: 'bold', 
              }}
              variant="contained"
              //  onClick={handleSubmit}
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
