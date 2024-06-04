import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const AdminRegister = () => {
  const navigate = useNavigate();

  const registerOwner = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    try {
      // Post form data to the backend
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/owners/register`, {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          telephone: formData.get("telephone"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status !== 201) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        toast.success("Sign up was successful");
        navigate("/account/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold" }}
        className="text-center text-[#3c2a0c] pt-6"
      >
        Restaurant Owners Registration
      </Typography>
      <div className="min-h-[60vh] flex px-6 justify-center items-center text-center">
        <img src={logo} alt="Logo" className=" md:h-full md:w-auto" />

        <div className="px-8 pt-2 flex flex-col">
          <form className="" onSubmit={registerOwner}>
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
              variant="contained"
              sx={{
                mt: 2,
                padding: "1rem",
                color: "dark",
                backgroundColor: "#536d1b",
                "&:hover": {
                  backgroundColor: "#bda915",
                },
              }}
            >
              Register
            </Button>
          </form>
          <div className="flex mt-7 space-x-4 items-center justify-center">
            <Typography
              variant="body2"
              align="center"
              sx={{  color: "#3c2a0c" }}
            >
              Have an account already?
            </Typography>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => navigate("/account/admin/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
