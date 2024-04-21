import React from "react";
import './hero.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../../data/Constants.jsx";


const Hero = () => {
  return (
    <>
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
          {
            images.map((image, index) => 
          <SwiperSlide>
            <img src={image} key={index}/>
          </SwiperSlide>)
          }
        </Swiper>

        <div className="overlay absolute pb-32 z-10 text-center">
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
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
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
    </>
  );
};

export default Hero;
