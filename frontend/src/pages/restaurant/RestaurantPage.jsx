import React, { useState } from "react";
import sample from "../../assets/hero.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Divider } from "@mui/material";
import Filter from "../../components/Filter.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ripples from "../../assets/ripples.svg";
import CallIcon from "@mui/icons-material/Call";
import MenuCard from "../../components/cards/MenuCard.jsx";

const getRestaurant = (...args) => {
  // Prepare url
  const url = new URL(args[0]);
  return fetch(url).then((response) => response.json());
};

const RestaurantPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("All");
  const { data, loading, error } = useSWR(
    `${import.meta.env.VITE_APP_API_URL}/restaurants/${id}`,
    getRestaurant
  );


  if (loading)
    return (
      <div>
        <img src={ripples} />
      </div>
    );

  return (
    <>
      <Navbar />
      <div>
        <section>
          <img src={`https://savefiles.org/${data?.image}?shareable_link=211`} className="w-full h-[60vh] object-cover" />
          <div className="pt-3 pb-5 px-5 lg:px-20">
            <h1 className="text-4xl font-semibold text-[#3c2a0c]">
              {data?.name}
            </h1>
            <p className="mt-1 text-[#674e1c]">{data?.description}</p>
            <div className="space-y-3 mt-3">
              <p className="text-[#674e1c] flex items-center gap-3">
                <LocationOnIcon />
                <span className="text-[#674e1c]">
                  {data?.region}: {data?.town}, {data?.city}
                </span>
              </p>
              <p className="text-[#674e1c] flex items-center gap-3">
                <CalendarTodayIcon />
                <span className="">
                  {data?.openingDays}: {data?.openingHours}
                </span>
              </p>
              <p className="text-[#674e1c] flex items-center gap-3">
                <CallIcon />
                <span className="">{data?.telephone}</span>
              </p>
            </div>
          </div>
        </section>
        <Divider />
        <div className="px-5 lg:px-20">
          <section className="pt-[2rem] lg:flex relative">
            <div className="space-y-10 lg:w-[20%] filter">
              <Filter setCategory={setCategory} />
            </div>
            <div className="space-y-5 pb-8 lg:w-[80%] lg:pl-10 ">
              {category === "All"
                ? data?.menus.map((menu) => (
                    <MenuCard key={menu._id} menu={menu} restaurant={data}/>
                  ))
                : data?.menus
                    .filter((menu) => menu.category === category)
                    .map((menu) => <MenuCard key={menu._id} menu={menu} />)}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurantPage;
