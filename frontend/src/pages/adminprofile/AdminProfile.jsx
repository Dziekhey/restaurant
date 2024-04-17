import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminOrders from "./AdminOrders";
import AdminMenu from "./AdminMenu";
import AdminEvents from "./AdminEvents";

const AdminProfile = () => {
  const handleClose = () => {};

  return (
    <>
      <div>
        <div className="lg:flex justify-between">
          <div>
            <AdminSideBar handleClose={handleClose} />
          </div>
          <div className="lg:w-[80%]"></div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<AdminOrders />} />
            <Route path='/menu' element={<AdminMenu />} />
            <Route path='/events' element={<AdminEvents />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
