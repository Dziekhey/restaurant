import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";


const orders = [1,2,3,4,5]

const OrderTable = () => {
  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader title={'All Orders'} sx={{pt:2, alignItems:'center'}} />
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Food Image</TableCell>
            <TableCell align="right">Food Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="order">
                {1462662655}
              </TableCell>
              <TableCell align="right">{'Image'}</TableCell>
              <TableCell align="right">{'kenkey'}</TableCell>
              <TableCell align="right">{'fish'}</TableCell>
              <TableCell align="right">{'2'}</TableCell>
              <TableCell align="right">{'GH₵20'}</TableCell>
              <TableCell align="right">{'Kenneth Antwi'}</TableCell>
              <TableCell align="right">{'Pending'}</TableCell>
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

export default OrderTable;
