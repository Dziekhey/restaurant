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
      const response = await fetch("http://localhost:4000/owners/register", {
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
      <div className="min-h-[60vh] flex p-6 flex-col justify-center items-center text-center">
        <div className="size-3/4 flex flex-col-2 justify-center items-center text-center">
          <div className="h-96 w-1/2 flex items-center bg-[#e6ea5a] border-r-2 justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-full md:h-full md:w-auto object-cover"
            />
          </div>

          <div className="p-8">
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              className="text-center text-[#3c2a0c]"
            >
              Register
            </Typography>
            <form className="" onSubmit={registerOwner}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ color: "#3c2a0c" }}
              />
              <TextField
                id="outlined-basic"
                label="Telephone Number"
                name="telephone"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ color: "#3c2a0c" }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ color: "#3c2a0c" }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ color: "#3c2a0c" }}
              />
              <Button
                fullWidth
                type="submit"
                sx={{
                  mt: 2,
                  padding: "1rem",
                  color: "#3c2a0c",
                  backgroundColor: "#d99e06",
                  "&:hover": {
                    backgroundColor: "#917617",
                  },
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                Register
              </Button>
            </form>
            <div className="flex mt-10 space-x-4">
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, color: "#3c2a0c" }}
              >
                Have an account already?
              </Typography>
              <Button
                size="small"
                variant="outlined"
                color="error"
                sx={{ pt: 1, color: "#3c2a0c" }}
                onClick={() => navigate("/account/admin/login")}
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

export default AdminRegister;
