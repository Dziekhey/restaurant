import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import toast from "react-hot-toast";

const categories = [
  { value: "Pending", label: "Pending" },
  { value: "Completed", label: "Completed" },
  { value: "Failed", label: "Failed" },
];


const StatusForm = (id) => {

  const [item, setItem] = useState('')
  const updateStatus = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission

  
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: item
        }),
      });
  
      if (response.status !== 201) {
        toast.error("Failed to update order status");
      } else {
        toast.success("Order status was made successfully");
        // navigate("/adminprofile/menu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        <div className="p-5">
          <div className="pb-6">
            <h className="text-center text-xl pb-10">Update Status</h>
          </div>
          <form >
            <TextField
              id="outlined-select-currency"
              select
              label="Order Status"
              name="status"
              onChange={(e)=>{setItem(e.target.value)}}
              value={item}
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
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }}
                variant="contained"
                type="submit"
                className="mt-3"
               onClick={updateStatus}
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
