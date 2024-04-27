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

const EventCard = ({ event }) => {
  return (
    <>
      <Card sx={{ width: 400, height: 400 }} className="">
        <CardMedia image={event.image} sx={{ height: 150 }} />
        <CardContent>
          <h1 className="text-3xl text-brown font-bold">{event.restaurant}</h1>
          <div>
            <p className="text-sm text-brown pt-3">
              {event.name}: <span>{event.description}</span>
            </p>
          </div>

          <div className="flex pt-3  justify-center">
            <p className="text-xl text-blue-400">From {event.start} - </p>
            <span>{' '} </span>
            <p className="text-xl text-red-400">To {event.end}</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </>
  );
};

export default EventCard;
