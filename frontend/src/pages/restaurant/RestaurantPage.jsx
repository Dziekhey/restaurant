import React from "react";
import sample from "../../assets/hero.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Divider } from "@mui/material";
import Filter from "../../components/Filter.jsx";
import { menus } from "../../data/Constants.jsx";
import MenuCard from "../../components/MenuCard.jsx";


const RestaurantPage = () => {
  return (
    <>
      <div>
        <section>
          <img src={sample} className="w-full h-[60vh] object-cover" />
          <div className="pt-3 pb-5 px-5 lg:px-20">
            <h1 className="text-4xl font-semibold text-[#3c2a0c]">
              Ghanaian Fast Food
            </h1>
            <p className="mt-1 text-[#674e1c]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolore, temporibus qui animi, architecto fuga soluta nulla id
              consequuntur ut incidunt et, pariatur facere aliquam neque libero
              quidem dolores vero!
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-[#674e1c] flex items-center gap-3">
                <LocationOnIcon />
                <span className="text-[#674e1c]">
                  Greater Accra Region: East Legon, Accra
                </span>
              </p>
              <p className="text-[#674e1c] flex items-center gap-3">
                <CalendarTodayIcon />
                <span className="">Monday-Sunday: 9:00 AM - 9:00 PM</span>
              </p>
            </div>
          </div>
        </section>
        <Divider />
        <div className="px-5 lg:px-20">
          <section className="pt-[2rem] lg:flex relative">
            <div className="space-y-10 lg:w-[20%] filter">
              <Filter />
            </div>
            <div className="space-y-5 lg:w-[80%] lg:pl-10 ">
              {menus.map((menu) => (
                <MenuCard key={menus}/>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
