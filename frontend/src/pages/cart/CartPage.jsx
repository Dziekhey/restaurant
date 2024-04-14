import { Divider } from "@mui/material";
import React from "react";
import CartCard from "../../components/CartCard";
import { cartOrders } from "../../data/Constants";

const CartPage = () => {
  return (
    <>
      <div>
        <main className="lg:flex justify-between ">
          <section className="lg:w-[30%] space-y-6 lg:min-h-screen py-10">
            {cartOrders.map((cartOrder) => (
              <CartCard />
            ))}
            <Divider />
            <div className="billDetails px-5 text-sm">
              <p className="font-bold py-5 text-[#674e1c]">Bill Details</p>
              <div className="space-y-3">
                <div className="flex justify-between text-[#674e1c]">
                  <p>Item Total</p>
                  <p>GH₵20</p>
                </div>
                <div className="flex justify-between text-[#674e1c]">
                  <p>GST and Restaurant Charges</p>
                  <p>GH₵10</p>
                </div>
                <Divider />
              </div>
              <div className="flex justify-between text-[#674e1c]">
              <p>Total Pay</p>
                  <p>GH₵30</p>
              </div>
            </div>
          </section>
          <Divider orientation="vertical" flexItem/>
          <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0"></section>
        </main>
      </div>
    </>
  );
};

export default CartPage;
