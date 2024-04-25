import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import StatusForm from "./StatusForm";

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

const OrderTable = ({ownerOrders}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const updateStatus = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission

      const response = await fetch(`http://localhost:4000/orders/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: 'Pending'
        }),
      });

      if (response.status !== 201) {
        toast.error("Failed update status");
      } else {
        toast.success("Order status was successfully updated");
        // navigate("/adminprofile/orders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"All Orders"}
            sx={{ pt: 2, alignItems: "center" }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="center">Food Image</TableCell>
                  <TableCell align="center">Food Name</TableCell>
                  {/* <TableCell align="center">Ingredients</TableCell> */}
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">GH₵ Price</TableCell>
                  <TableCell align="center">Customer</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ownerOrders.map((order) => (
                  <TableRow
                    key={order.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="order">
                      {order._id}
                    </TableCell>
                    <TableCell align="center">{order.image}</TableCell>
                    <TableCell align="center">{order.foodname}</TableCell>
                    <TableCell align="center">{order.quantity}</TableCell>
                    {/* <TableCell align="center">{'2'}</TableCell> */}
                    <TableCell align="center">{order.totalprice}</TableCell>
                    <TableCell align="center">{order.username}</TableCell>
                    <TableCell align="center">{order.status}</TableCell>
                    <TableCell align="center">
                      <IconButton key={order._id} onClick={handleOpen}>
                        <CreateIcon />
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
          <StatusForm />
        </Box>
      </Modal>
    </>
  );
};

export default OrderTable;
