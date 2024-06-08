import { Divider } from "@mui/material";
import React from "react";
import { cartOrders } from "../../data/Constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CartCard from "../../components/cards/CartCard";

const CartPage = () => {
  return (
    <>
    <Navbar />
      <div className="items-center">
        <main className="lg:flex justify-between ">
          <section className="lg:w-[70%] space-y-4 lg:min-h-screen py-10">
            {cartOrders.map((cartOrder) => (
              <CartCard />
            ))}
            <Divider />
            <div className="billDetails px-5 text-sm">
              <p className="font-bold py-5 text-xl text-[#674e1c]">Bill Details</p>
              <div className="space-y-3">
                <div className="flex justify-between text-[#674e1c]">
                  <p className="text-sm">Item Total</p>
                  <p>GH₵20</p>
                </div>
                <div className="flex justify-between text-[#674e1c]">
                  <p>GST and Restaurant Charges</p>
                  <p>GH₵10</p>
                </div>
                <Divider />
              </div>
              <div className="flex justify-between pt-2 text-[#674e1c]">
              <p>Total Pay</p>
                  <p>GH₵30</p>
              </div>
            </div>
          </section>
          <Divider orientation="vertical" flexItem/>
          <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0"></section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
