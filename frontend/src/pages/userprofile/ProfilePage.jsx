import React, { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import FavoritePage from "./FavoritePage";
import OrdersPage from "./OrdersPage";
import EventsPage from "./EventsPage";
import NotificationPage from "./NotificationPage";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AllRestaurantsPage from "./AllRestaurantsPage";

const ProfilePage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
    <Navbar/>
      <div className="lg:flex justify-between">
        <div className="sticky h-[80vh] lg:w-[20%]">
          <ProfileNavigation open={openSideBar} />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/dashboard" element={<UserProfile />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/browse restaurants" element={<AllRestaurantsPage />} />
            {/* <Route path="/favorites" element={<FavoritePage />} /> */}
            {/* <Route path="/events" element={<EventsPage />} /> */}
            {/* <Route path="/notifications" element={<NotificationPage />} /> */}
            {/* <Route path="/logout" element={<UserProfile />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
