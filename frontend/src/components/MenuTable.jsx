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
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import Delete from "@mui/icons-material/Delete";

const orders = [1, 2, 3, 4, 5];

const MenuTable = () => {
  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <CreateIcon />
              </IconButton>
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
                  <TableCell align="right">Availabilty</TableCell>
                  <TableCell align="right">Delete</TableCell>
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
                    <TableCell align="right">{"GH₵20"}</TableCell>
                    <TableCell align="right"><IconButton><Delete/></IconButton></TableCell>
                   
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
