import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio, Divider
} from "@mui/material";
import { lime } from '@mui/material/colors';
import { categories } from "../data/Constants";

const Filter = () => {
  const [value, setValue] = useState("All");

  const handleFilter = (e) => {
    setValue(e.target.value, e.target.name);
  };

  return (
    <>
      <div className="box space-y-5 lg:sticky top-28">
        <div>
          <Typography variant="h5" sx={{ paddingBottom: "1rem" }} className="text-[#3c2a0c]">
            Food Category
          </Typography>
          <FormControl className="py-10 space-y-5" component={"fieldset"}>
            <RadioGroup
              onChange={handleFilter}
              name="food_category"
              value={value}
            >
              {categories.map((category,index) => (<>
                <FormControlLabel
                  key={category}
                  value={category}
                  control={<Radio  sx={{
                    color: lime[900],
                    '&.Mui-checked': {
                      color: lime[900],
                    },
                  }}  />}
                  label={category}
                  className="text-[#3c2a0c] my-4"
                />
                {index!== categories.length-1 && <Divider />}
              </>))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Filter;
