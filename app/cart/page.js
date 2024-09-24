"use client";
import React from "react";
import Navbar from "../navbar";
import { useCart } from "../create-context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  console.log(cart, "cart");
  return (
    <>
      <ToastContainer autoClose={1000} />
      <Navbar />
      <div>
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] flex justify-between m-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-24  nav">
          <div className=" w-full">
           
            {cart.length === 0 ? (
              <div className="w-full">
                <div className="flex my-16 h-screen">
                  <div className="mx-auto">
                    <p className="text-3xl font-semibold text-center">
                      Cart Empty
                    </p>
                    <Link href="/">
                      <button className="bg-[#315031] hover:bg-transparent hover:text-[#315031] hover:border border hover:border-[#315031] text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-sm sm:text-base lg:text-lg 2xl:text-xl sm:my-3 2xl:my-8 mx-auto">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="font-semibold text-[22px] lg:text-2xl xl:text-3xl 2xl:text-5xl">
                  Your Cart
                </h1>
                <div className="flex justify-end ">
                  <button
                    onClick={() => {
                      clearCart();
                      toast.success("Cart cleared");
                    }}
                    className="bg-[#315031] hover:bg-transparent hover:text-[#315031] hover:border border hover:border-[#315031] text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-[10px] sm:text-[12px] md:text-[14px] lg:text-md xl:text-lg 2xl:text-xl sm:my-3 2xl:my-4 my-2"
                  >
                    Clear Cart
                  </button>
                </div>
                {cart.map((product, ind) => (
                  <div className="border  2xl:my-14 p-2 2xl:p-4 w-full flex gap-5">
                    <div className="w-2/12">
                      <Image width={200} height={200} src={product.image} />
                    </div>
                    <div className="w-8/12">
                      <h1 className="text-[#1E1E1E] xl:text-[20px] 2xl:text-[30px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px] lg:leading-[25px] md:text-[16px] md:my-1 md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px] text-[10px] mt-1 leading-[20px] product-name font-semibold">
                        {product.name}
                      </h1>
                      <h1 className=" 2xl:my-3 2xl:text-[36px] 2xl:leading-[25px] xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px] lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px] text-[14px] product-price">
                        {product.price}
                      </h1>
                      <Link href="https://www.controlf5.in/">
                        <button className="bg-[#315031] hover:bg-transparent hover:text-[#315031] hover:border border hover:border-[#315031] text-white  py-1 px-4 2xl:py-3 2xl:px-8 rounded text-[16px] 2xl:text-[18px]  my-5 2xl:my-14">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                    <div
                      className="w-1/12 flex justify-end"
                      onClick={() => {
                        removeFromCart(product.id);
                        toast.success("Removed from cart");
                      }}
                    >
                      <img
                        src="/images/wrong.svg"
                        className="w-3 lg:w-6 2xl:w-10"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
