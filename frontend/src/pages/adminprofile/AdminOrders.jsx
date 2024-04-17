import { Card, FormControl, FormControlLabel, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";


const OrderStatus = [
  {label:'Pending', value:'PENDING'}
  {label:'Completed', value:'COMPLETED'}
  {label:'All', value:'ALL'}
]
const AdminOrders = () => {

const [filterValue, setFilterValue] = useState();


const handleFilter = (e,value) => {
  setFilterValue(value);
}
  return (
    <>
      <div className="px-2">
        <Card className="p-5">
          <Typography sx={{ paddingBottom: "1rem" }} variant="5">
            Order Status
          </Typography>
          <FormControl>
            <RadioGroup
            onChange={handleFilter}
              row
              name="category"
              value={filterValue || "All"}
            >
              {
                OrderStatus.map((item) => <FormControlLabel />)
              }
            </RadioGroup>
          </FormControl>
        </Card>
      </div>
    </>
  );
};

export default AdminOrders;
