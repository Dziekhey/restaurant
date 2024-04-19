import React from "react";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-brown text-white">
          <div className="container mx-auto px-20 lg:px-20 pt-16 flex flex-col gap-5 md:flex-row justify-between border-t border-slate-800">
            <div className="flex">
             <img src={logo} className="w-64 h-64"/>
            </div>

            <div className="pt-10">
              <p>CONTACT INFORMATION</p>

              <div className="flex flex-col text-start mb-4 md:mb-0">
               
                
              </div>
            </div>
            <div className="pt-10">
              <p>CONTACT INFORMATION</p>

              <div className="flex flex-col text-start mb-4 md:mb-0">
               
                
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center ">
            <span className="text-gray-400 leading-10">
              BiteHub &copy; 2024
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
