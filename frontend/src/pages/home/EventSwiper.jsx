import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./EventSwiper.css";
import EventCard from "../../components/EventCard";
import { events } from "../../data/Constants";

const EventSwiper = () => {
  return (
    <>
      <div>
        <p className="text-4xl font-semibold pl-16 text-brown">
          Discover What's Ahead: Upcoming Events to Look Forward To
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="event-swiper"
        >
          {events.map((event, index) => (
            <SwiperSlide className="event-swiperslide">
              <EventCard className='card' key={index} event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default EventSwiper;
