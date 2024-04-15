import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="h-auto w-auto p-8 mt-20 flex flex-col justify-center shadow-md items-center text-center">
          <Typography variant="h5" className="text-center text-[#3c2a0c] font-bold">
            Login
          </Typography>
          <form>
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
              Login
            </Button>
          </form>
          <div className="flex mt-10 space-x-4">
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, color: "#917617" }}
            >
              Don't have an account?
            </Typography>
            <Button
              size="small"
              variant="outlined"
              color="error"
              sx={{ pt: 1, color: "#3c2a0c" }}
              onClick={() => navigate("/account/users/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
