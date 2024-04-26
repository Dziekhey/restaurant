import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import toast from "react-hot-toast";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import menuImg from "../assets/hero.jpg";
import { ingredients } from "../data/Constants";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MenuCard = ({ menu, restaurant }) => {

  const handleBoxChange = (value) => {
    console.log("value");
  };

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userTelephone = localStorage.getItem("userTelephone");

  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price based on quantity
    const updatedTotalPrice = number * menu.price;
    setTotalPrice(updatedTotalPrice);
  }, [number]);

  const increaseItem = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseItem = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const makeOrder = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission

      const response = await fetch("http://localhost:4000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantId: restaurant._id,
          restaurant_name: restaurant.name,
          image: menu.image,
          foodname: menu.name,
          quantity: number,
          totalprice: totalPrice,
          userId: userId,
          username: userName,
          status: 'Pending',
          telephone: userTelephone
        }),
      });

      if (response.status !== 201) {
        toast.error("Failed to make order");
      } else {
        toast.success("Order was made successfully");
        // navigate("/adminprofile/menu");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                src={`https://savefiles.org/${menu.image}?shareable_link=205`}
                alt="Menu Image"
                className="w-[7rem] h-[7rem] object-cover"
              />
              <div className="space-y-1 pl-5 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{menu.name}</p>
                <p>GH₵{menu.price}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="">{menu.description}</p>
          <form onSubmit={makeOrder}>
            {/* <div className="flex gap-5 flex-wrap">
              {ingredients.map((ingredient) => (
                <div>
                  <p>{ingredient.category}</p>
                  <FormGroup>
                    {ingredient.items.map((item) => (
                      <FormControlLabel
                        key={item}
                        control={<Checkbox onChange={() => handleBoxChange(item)} />}
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div> */}
            <div className="flex justify-between ml-8 items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={decreaseItem}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xl flex items-center justify-center">
                  {number}
                </div>
                <IconButton onClick={increaseItem}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <p className="pt-7 text-xl">GH₵{totalPrice}</p>{" "}
              {/* Display total price */}
            </div>
            <div className="pt-5">
              <Button sx={{
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }} type="submit" variant="contained">
                Place Order
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCard;
