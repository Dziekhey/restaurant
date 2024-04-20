import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="banner -z -50  flex flex-col justify-center items-center">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>

        <div className="w-[50vw] absolute z-10 text-center">
          <p className="text-2xl text-white lg:text-6xl font-bold z-10 py-5">
            BiteHub
          </p>
          <p className="z-10 py-5 text-white text-xl lg:4xl">
            Where Flavor Meets Convenience. Order In, Pick Up in Minutes.
          </p>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
           fullWidth
            variant="outlined"
          />
        </div>
        <div className="cover absolute top-0 left-0 right-0">
          <div className="fadeout"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
