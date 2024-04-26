import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useAuth } from "../services/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { status } from "../data/Constants";


const RestaurantForm = () => {
  const auth = useAuth();
  if (!auth.token) return <Navigate to="/account/admin/login" />;

  const navigate = useNavigate();

  const addRestaurant = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);

      const ownerId = auth.user._id;
      const response = await fetch(
        `http://localhost:4000/restaurants/${ownerId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        toast.success("Restaurant was created successfully");
        navigate("/adminprofile/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="py-10 lg:flex flex-col items-center justify-center min-h-screen">
        <div className="lg:max-w-4xl">
          <h1 className="font-bold text-2xl mb-2 text-center py-2">
            Add New Restaurant
          </h1>
          <form className="space-y-5" onSubmit={addRestaurant}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="file"
                  fullWidth
                  name="image"
                  label="Restaurant Image"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Restaurant's Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Restaurant's Description"
                  name="description"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Restaurant's Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Restaurant's Telephone"
                  name="telephone"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Cuisine Type"
                  name="cuisineType"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <h1>Eg. Monday - Friday</h1>
                <TextField
                  id="outlined-basic"
                  label="Opening Days"
                  name="openingDays"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <h1>Eg. 09:00AM - 10:00PM</h1>
                <TextField
                  id="outlined-basic"
                  label="Opening Hours"
                  name="openingHours"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <h1>Eg. Greater Accra Region</h1>
                <TextField
                  id="outlined-basic"
                  label="Region"
                  name="region"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  name="city"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Town"
                  name="town"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Restaurant Status"
                  name="status"
                  defaultValue="GH"
                  fullWidth
                >
                  {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Button sx={{
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }} variant="contained" type="submit">
              Create Restaurant
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestaurantForm;
