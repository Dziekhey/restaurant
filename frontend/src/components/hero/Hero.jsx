import "./hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../../data/Constants.jsx";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="banner -z -50  flex flex-col justify-center items-center">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="overlay bg-black/60  top-0 w-full h-full absolute flex flex-col justify-center z-10 text-center">
          {/* <div className="logo-container text-2xl text-white lg:text-6xl font-bold z-10 items-center justify-center">
            <img src={logo} className=" justify-center items-center" />
          </div> */}
          <div>
            <p className="text-2xl lg:text-4xl text-white z-10 py-5">
              Begin Your Culinary Adventure with BiteHub,
              <br /> where Flavor Meets Convenience.
            </p>
            <p className="z-10 py-4 text-[#B56401] text-xl font-medium lg:text-4xl">
              Order In, Pick Up in Minutes.
            </p>
          </div>
          <div className="space-x-10 py-5">
            <Link to="/account/users/login">
              <Button
                variant="contained"
                sx={{
                  padding: '1rem',
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }}
                className=" transition ease-in-out delay-300hover:-translate-y-2 hover:scale-110 duration-700"
              >
                Sign in as a Customer
              </Button>
            </Link>
            <span>
              <Link to="/account/admin/login">
                <Button
                 sx={{
                  padding: '1rem',
                  color: "dark",
                  backgroundColor: "#536d1b",
                  "&:hover": {
                    backgroundColor: "#bda915",
                  },
                }}
                  variant="contained"
                  className=" transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
                >
                  Sign in as an Owner
                </Button>
              </Link>
            </span>
          </div>
          {/* <TextField
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
            variant="outlined"
            className="text-white w-2/3"
          /> */}
        </div>
        {/* <div className="cover absolute top-0 left-0 right-0">
          <div className="fadeout"></div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
