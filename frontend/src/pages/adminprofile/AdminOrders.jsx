import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderTable from "../../components/OrderTable";

const OrderStatus = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
];
const AdminOrders = () => {
  const [filterValue, setFilterValue] = useState();

  const handleFilter = (e, value) => {
    setFilterValue(value);
  };
  return (
    <>
      <div className="px-2">
        <Card className="p-5">
          <Typography sx={{ paddingBottom: "1rem" }} variant="5">
            Order Status
          </Typography>
          <div>
          <FormControl>
            <RadioGroup
              onChange={handleFilter}
              row
              name="category"
              value={filterValue || "All"}
            >
              {OrderStatus.map((item) => (
                <FormControlLabel
                  key={item.label}
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                  sx={{ color: "grey" }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          </div>
        </Card>
        <OrderTable />
      </div>
    </>
  );
};

export default AdminOrders;
