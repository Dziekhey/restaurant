import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import eventImg from "../assets/event.jpg";

const EventCard = () => {
  return (
    <>
      <Card sx={{ width: 300 }} className="">
        <CardMedia image={eventImg} sx={{ height: 300 }} />
        <CardContent>
          <Typography variant="h5">Restaurant's Name</Typography>
          <Typography variant="h5">50% off on your first order</Typography>
          <div className="py-2 space-y-2 ">
            <p>{"Location"}</p>
            <p className="text-sm text-blue-400">February 14, 2024: 12:00AM</p>
            <p className="text-sm text-red-400">February 15, 2024: 12:00AM</p>
          </div>
        </CardContent>
       {false && <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>}
      </Card>
    </>
  );
};

export default EventCard;
