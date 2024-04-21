import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const RestaurantForm = () => {

const addRestaurant = async (event) => {
 try {
   event.preventDefault();
 
   const formData = new FormData(event.target);
 
   const response = await fetch(`${process.env.VITE_API_URL}/restaurants`, {
     method: "POST",
     body: formData, 
   });
 
   if (response.status !== 201) {};
 } catch (error) {
  console.log(error);
 }
}

  return (
    <>
      <div className="py-10 lg:flex flex-col items-center justify-center min-h-screen">
        <div className="lg:max-w-4xl">
          <h1 className="font-bold text-2xl mb-2 text-center py-2">
            Add New Restaurant
          </h1>
          <form className="space-y-4" onSubmit={addRestaurant}>
            <Grid container spacing={2}>
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
              label="Restaurant Name"
              name="name"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Restaurant Description"
              name="description"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Restaurant Email"
              name="email"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Restaurant Telephone"
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
            <TextField
              id="outlined-basic"
              label="Opening Days"
              name="openingDays"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
              id="outlined-basic"
              label="Opening Hours"
              name="openingHours"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} lg={4}>
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
            </Grid>
            <Button variant="contained" color='primary' type="submit">Create Restaurant</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestaurantForm;
