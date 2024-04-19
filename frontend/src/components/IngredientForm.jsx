import { Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";

const categories = [
  { value: "GH", label: "Protein" },
  { value: "NG", label: "Seasonings" },
  { value: "TG", label: "Sweetners" },
  { value: "AU", label: "Oils" },
  { value: "AU", label: "Sources" },
];

const IngredientForm = () => {
  return (
    <>
      <div className="">
        <div className="p-5">
          <div className="pb-6">
            <h className="text-center text-xl pb-10">Add ingredients</h>
          </div>
          <form>
            <TextField
              id="outlined-select-currency"
              select
              label="Ingredient Category"
              name="catogory"
              defaultValue="GH"
              fullWidth
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="mt-3">
            <Button variant="contained" type="submit" className="mt-3">Create</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IngredientForm;
