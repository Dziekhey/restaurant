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
import useQueryOwners from "../Hooks/useQueryOwner";
import { useAuth } from "../services/useAuth";

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
  const auth = useAuth();

  const ownerId = localStorage.getItem("ownerId");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { owner, loading } = useQueryOwners(ownerId);

  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <>
                <div>
                  <Link to="/adminprofile/add-menu">
                    <IconButton aria-label="settings"sx={{backgroundColor: '#bda915'}} >
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
                  <TableCell align="center" sx={{fontWeight: 'bold'}}>Image</TableCell>
                  <TableCell align="center" sx={{fontWeight: 'bold'}}>Food Category</TableCell>
                  <TableCell align="center" sx={{fontWeight: 'bold'}}>Food Name</TableCell>
                  {/* <TableCell align="center" sx={{fontWeight: 'bold'}}>Ingredients</TableCell> */}
                  <TableCell align="center" sx={{fontWeight: 'bold'}}>Price</TableCell>
                  <TableCell align="center" sx={{fontWeight: 'bold'}}>Actions</TableCell>
                  {/* <TableCell align="center" sx={{fontWeight: 'bold'}}>Add ingredients</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {owner &&
                  owner.restaurant &&
                  owner.restaurant.menus.map((menu) => (
                    <TableRow
                      key={menu}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="order">
                        <img src={`https://savefiles.org/${menu.image}?shareable_link=205`}  className="w-[7rem] h-[7rem] object-cover" />
                        
                      </TableCell>
                      <TableCell align="center">{menu.category}</TableCell>
                      <TableCell align="center">{menu.name}</TableCell>
                      {/* <TableCell align="center">{"2"}</TableCell> */}
                      <TableCell align="center">GH₵{menu.price}</TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <Delete />
                        </IconButton>
                        <IconButton>
                          <CreateIcon />
                        </IconButton>
                      </TableCell>
                      {/* <TableCell align="right" className="flex">
                        <IconButton onClick={handleOpen}>
                          <AddIcon />
                        </IconButton>
                      </TableCell> */}
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
