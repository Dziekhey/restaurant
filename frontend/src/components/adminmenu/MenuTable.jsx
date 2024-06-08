import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import useQueryOwners from "../../Hooks/useQueryOwner";
import toast, { Toaster } from "react-hot-toast";

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
  const ownerId = localStorage.getItem("ownerId");
  const { owner } = useQueryOwners(ownerId);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (owner && owner.restaurant) {
      setMenus(owner.restaurant.menus);
    }
  }, [owner]);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const deleteMenu = async (menuId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/menus/${menuId}`, {
        method: "DELETE",
      });

      if (response.status !== 200) {
        toast.error("Failed to delete menu item");
      } else {
        toast.success("Menu item deleted successfully");
        setMenus((prevMenus) => prevMenus.filter((menu) => menu._id !== menuId));
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <div>
                <Link to="/adminprofile/add-menu">
                  <IconButton aria-label="settings" sx={{ backgroundColor: '#bda915' }}>
                    <AddIcon />
                    <span>
                      <h6 className="px-1">Add Menu</h6>
                    </span>
                  </IconButton>
                </Link>
              </div>
            }
            title={"All Menu Items"}
            sx={{ pt: 2, alignItems: "center" }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Image</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Food Category</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Food Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menus.map((menu) => (
                  <TableRow
                    key={menu._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={`https://savefiles.org/${menu.image}?shareable_link=205`} className="w-[7rem] h-[7rem] object-cover" />
                    </TableCell>
                    <TableCell align="center">{menu.category}</TableCell>
                    <TableCell align="center">{menu.name}</TableCell>
                    <TableCell align="center">GH₵{menu.price}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => deleteMenu(menu._id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default MenuTable;
