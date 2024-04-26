import React, { useState } from "react";
import { Button, Chip, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const categories = [
  { value: "Protein", label: "Protein" },
  { value: "Seasonings", label: "Seasonings" },
  { value: "Sweeteners", label: "Sweeteners" },
  { value: "Oils", label: "Oils" },
  { value: "Sources", label: "Sources" },
];

const IngredientForm = () => {
  const [category, setCategory] = useState("Protein");
  const [ingredientNames, setIngredientNames] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setCurrentIngredient(event.target.value);
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim() !== "") {
      setIngredientNames([...ingredientNames, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here
    console.log("Category:", category);
    console.log("Ingredient Names:", ingredientNames);
    // Reset input fields after submission
    setCategory("GH");
    setIngredientNames([]);
    setCurrentIngredient("");
  };

  return (
    <div className="p-5">
{/* <CloseIcon/> */}
      <div className="pb-6">
        <h className="text-center text-2xl text-brown pb-10">Add ingredients</h>
      </div>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            id="category-select"
            select
            labelId="category-label"
            value={category}
            onChange={handleCategoryChange}
            fullWidth
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <h1 className="pt-3">Type out each ingredient one after another</h1>
        <TextField
          id="ingredient-name"
          label="Ingredient Name"
          value={currentIngredient}
          onChange={handleIngredientChange}
          fullWidth
         sx={{mt: '10px'}}
        />
        <Button
          variant="contained"
          onClick={handleAddIngredient}
          sx={{mt: '10px'}}
        >
          Add Ingredient
        </Button>
        <div className="mt-3">
          {ingredientNames.map((ingredient) => (
            <Chip key={ingredient} label={ingredient}/>
          ))}
        </div>
        <Button sx={{mt: '15px',
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }}  variant="contained" type="submit" className="mt-3">
          Create
        </Button>
      </form>
    </div>
  );
};

export default IngredientForm;
