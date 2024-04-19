import { Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";

const categories = [
  { value: "GH", label: "Pending" },
  { value: "NG", label: "Completed" }
];

const StatusForm = () => {
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
              label="Order Status"
              name="status"
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
            <Button sx={{color: "#3c2a0c",
            backgroundColor: "#d99e06",
            "&:hover": {
              backgroundColor: "#917617",
            }}} variant="contained" type="submit" className="mt-3">Change</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StatusForm;
