import React from "react";
import './hero.css'
const Hero = () => {
  return (
    <>
      <div>
        <div className="banner -z -50 relative flex flex-col justify-center items-center">
          <div className="w-[50vw] z-10 text-center">
            <p className="text-2xl text-white lg:text-6xl font-bold z-10 py-5">BiteHub</p>
            <p className="z-10 text-white text-xl lg:4xl">
              Taste the Convenience: Food, Fast and Delivered.
            </p>
          </div>
          <div className="cover absolute top-0 left-0 right-0">

            <div className="fadeout">

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
