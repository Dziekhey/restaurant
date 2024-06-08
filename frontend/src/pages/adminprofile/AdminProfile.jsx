import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminOrders from "./AdminOrders";
import AdminMenu from "./AdminMenu";
import MenuForm from "../../components/adminmenu/MenuForm";

const AdminProfile = () => {
  const handleClose = () => {};

  return (
    <>
      <div>
        <div className="lg:flex justify-between">
          <div>
            <AdminSideBar handleClose={handleClose} />
          </div>
          <div className="lg:w-[80%]">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<AdminOrders />} />
            <Route path='/menu' element={<AdminMenu />} />
            <Route path='/add-menu' element={<MenuForm />} />
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
