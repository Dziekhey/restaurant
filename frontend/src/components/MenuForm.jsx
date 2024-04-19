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
import React, { useState } from "react";

const countries = [
  { value: "GH", label: "Seafood" },
  { value: "NG", label: "Barbecue and Grilling" },
  { value: "TG", label: "Desserts and Sweets" },
  { value: "AU", label: "Breakfast and Brunch" },
  { value: "AU", label: "Street Food" },
  { value: "AU", label: "Gourmet and Fine Dining" },
];

const availabilty = [
    { value: "GH", label: "In Stock" },
    { value: "NG", label: "Out of Stock" },
]

const MenuForm = () => {
  return (
    <>
      <div className="py-10 lg:flex flex-col items-center justify-center min-h-screen">
        <div className="lg:max-w-4xl">
          <h1 className="font-bold text-2xl mb-2 text-center py-2">
            Add Menu Item
          </h1>
          <form className="space-y-4">
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

              <Grid item xs={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Food Category"
                  name="catogory"
                  defaultValue="GH"
                  fullWidth
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="outlined-basic"
                  label="Food Price"
                  name="price"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">GH₵</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
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
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Add Menu
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MenuForm;
