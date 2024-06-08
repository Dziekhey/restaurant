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
} from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import StatusModal from "./StatusModal";

const OrderTable = ({ ownerOrders, setOwnerOrders }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOpen = (orderId) => {
    setSelectedOrderId(orderId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrderId(null);
  };

  const updateOrderStatus = (id, newStatus) => {
    setOwnerOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-pink-500";
      case "Completed":
        return "bg-green-500";
      case "Failed":
        return "bg-red-500";
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
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Food Image
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Food Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    GH₵ Price
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Customer
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Customer's No.
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ownerOrders.map((order) => (
                  <TableRow
                    key={order.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      <img
                        src={`https://savefiles.org/${order.image}?shareable_link=205`}
                        className="w-[7rem] h-[7rem] object-cover"
                      />
                    </TableCell>
                    <TableCell align="center">{order.foodname}</TableCell>
                    <TableCell align="center">{order.quantity}</TableCell>
                    <TableCell align="center">{order.totalprice}</TableCell>
                    <TableCell align="center">{order.username}</TableCell>
                    <TableCell align="center">{order.telephone}</TableCell>
                    <TableCell align="center">
                      <h3
                        className={`cursor-not-allowed text-white shadow-md rounded-md font-bold px-3 py-2 ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </h3>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        key={order._id}
                        onClick={() => handleOpen(order._id)}
                      >
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
      {selectedOrderId && (
        <StatusModal
          open={open}
          setOpen={setOpen}
          updateOrderStatus={updateOrderStatus}
          handleClose={handleClose}
          orderId={selectedOrderId}
        />
      )}
    </>
  );
};

export default OrderTable;
