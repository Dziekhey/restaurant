import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import menuImg from "../assets/hero.jpg";
import { ingredients } from "../data/Constants";

const MenuCard = () => {

const handleBoxChange = (value) => {
console.log('value')
}

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          color="#795e1a"
        >
          <div className="lg:flex item-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                src={menuImg}
                alt="Menu Image"
                className="w-[7rem] h-[7rem] object-cover"
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Kenkey</p>
                <p>GH₵10</p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {ingredients.map((ingredient) => (
                <div>
                  <p>{ingredient.category}</p>
                  <FormGroup>
                    {ingredient.items.map((item) => (
                      <FormControlLabel key={item} control={<Checkbox onChange={() => handleBoxChange(item)} />} label={item} />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <Button type="submit" variant="contained" disabled={false}>{true?'Add to Cart':'Out of Stock'}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCard;
