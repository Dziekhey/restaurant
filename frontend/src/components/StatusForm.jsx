import React from "react";
import { Button, MenuItem, TextField } from "@mui/material";

const categories = [
  { value: "Pending", label: "Pending" },
  { value: "Completed", label: "Completed" },
  { value: "Failed", label: "Failed" },
];

const StatusForm = () => {
  return (
    <>
      <div className="">
        <div className="p-5">
          <div className="pb-6">
            <h className="text-center text-xl pb-10">Update Status</h>
          </div>
          <form>
            <TextField
              id="outlined-select-currency"
              select
              label="Order Status"
              name="status"
              defaultValue="Pending"
              fullWidth
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="mt-3">
              <Button
                sx={{
                  color: "#3c2a0c",
                  backgroundColor: "#d99e06",
                  "&:hover": {
                    backgroundColor: "#917617",
                  },
                }}
                variant="contained"
                type="submit"
                className="mt-3"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StatusForm;
