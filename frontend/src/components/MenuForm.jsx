import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../services/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useQueryOwners from "../Hooks/useQueryOwner";

const categories = [
  { value: "Seafood", label: "Seafood" },
  { value: "Barbecue and Grilling", label: "Barbecue and Grilling" },
  { value: "Desserts and Sweets", label: "Desserts and Sweets" },
  { value: "Breakfast and Brunch", label: "Breakfast and Brunch" },
  { value: "Street Food", label: "Street Food" },
  { value: "Gourmet and Fine Dining", label: "Gourmet and Fine Dining" },
];

const availabilty = [
  { value: "In Stock", label: "In Stock" },
  { value: "Out of Stock", label: "Out of Stock" },
];

const MenuForm = () => {
  const auth = useAuth();

  const ownerId = localStorage.getItem("ownerId");
  // const restaurantId = localStorage.getItem("restaurantId");

  const navigate = useNavigate();

  const { owner, loading } = useQueryOwners(ownerId);

  const addMenu = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);

      // Access restaurantId from owners
      // const restaurantId = auth.user._id;
      const response = await fetch(
        `http://localhost:4000/menus/${owner.restaurant._id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        toast.success("Menu was added successfully");
        navigate("/adminprofile/menu");
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
          <h1 className="font-bold text-2xl mb-10 text-center py-2">
            Add Menu Item
          </h1>
          <form className="space-y-4" onSubmit={addMenu}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="file"
                  fullWidth
                  name="image"
                  label="Food Image"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Food Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Food Description"
                  name="description"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="outlined-basic"
                  label="Food Price"
                  name="price"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">GH₵</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Food Category"
                  name="category"
                  defaultValue="GH"
                  fullWidth
                  value={categories.value}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* <Grid item xs={12} lg={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Food Avalability"
                  name="availability"
                  defaultValue="GH"
                  fullWidth
                >
                  {availabilty.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}
            </Grid>
            <div className="flex justify-between">
              <Button variant="contained" color="primary" type="submit"  sx={{
                color: "dark",
                backgroundColor: "#536d1b",
                "&:hover": {
                  backgroundColor: "#bda915",
                },
              }}>
                Add Menu
              </Button>
              <Link to="/adminprofile/menu">
                <Button  sx={{
                color: "dark",
                backgroundColor: "#536d1b",
                "&:hover": {
                  backgroundColor: "#bda915",
                },
              }} variant="contained" color="primary" type="submit">
                  Close
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MenuForm;
