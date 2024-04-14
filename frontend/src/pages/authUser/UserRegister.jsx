import React from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const UserRegister = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[60vh] flex p-6 flex-col justify-center items-center text-center">
        <div className="size-3/4 flex flex-col-2 justify-center shadow-md bg-[#e6ea5a] items-center text-center">
          <div className="h-96 w-1/2 flex items-center  border-r-2 justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-full md:h-full md:w-auto object-cover"
            />
          </div>

          <div className="p-8">
            <Typography variant="h5" className="text-center text-[#3c2a0c]">
              Register
            </Typography>
            <form className="">
              <TextField
                id="outlined-basic"
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="Telephone Number"
                name="telephone"
                variant="outlined"
                fullWidth
                margin="normal"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
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
                type="submit"
                sx={{
                  mt: 2,
                  padding: "1rem",
                  color: "#3c2a0c",
                  backgroundColor: "#b6a018",
                  "&:hover": {
                    backgroundColor: "#917617",
                  },
                }}
                variant="contained"
                //  onClick={handleSubmit}
              >
                Register
              </Button>
            </form>
            <div className="flex mt-10 space-x-4">
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, color: "#917617" }}
              >
                Have an account already?
              </Typography>
              <Button
                size="small"
                variant="outlined"
                color="error"
                sx={{ pt: 1, color: "#3c2a0c" }}
                onClick={() => navigate("/account/users/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
