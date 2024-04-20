import {
  Box,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Modal, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import IngredientForm from "./IngredientForm";

const orders = [1, 2, 3, 4, 5];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MenuTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <>
                <div>
                  <Link to="/adminprofile/add-menu">
                    <IconButton aria-label="settings">
                      <AddIcon />
                      <span>
                        <h6 className="px-1">Add Menu</h6>
                      </span>
                    </IconButton>
                  </Link>
                </div>
              </>
            }
            title={"All Menu Items"}
            sx={{ pt: 2, alignItems: "center" }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="right">Food Category</TableCell>
                  <TableCell align="right">Food Name</TableCell>
                  <TableCell align="right">Ingredients</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
                  <TableCell align="right">Add ingredients</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="order">
                      {1462662655}
                    </TableCell>
                    <TableCell align="right">{"Image"}</TableCell>
                    <TableCell align="right">{"kenkey"}</TableCell>
                    <TableCell align="right">{"fish"}</TableCell>
                    <TableCell align="right">{"2"}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Delete />
                      </IconButton>
                      <IconButton>
                        <CreateIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right" className="flex">
                      <IconButton onClick={handleOpen}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IngredientForm />
        </Box>
      </Modal>
    </>
  );
};

export default MenuTable;
