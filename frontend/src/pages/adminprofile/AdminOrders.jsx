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
import { lime } from "@mui/material/colors";

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
          <Typography sx={{ paddingBottom: "1rem", color: '#3c2a0c' }} variant="5">
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
                  control={<Radio sx={{
                    color: lime[900],
                    '&.Mui-checked': {
                      color: lime[900],
                    },
                  }} />}
                  label={item.label}
                  sx={{ color: "#3c2a0c" }}
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
