import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" 2xl:mt-[180px] xl:mt-32 lg:mt-28 2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] w-[420px] m-auto flex justify-around nav">
        <div className="" data-aos="fade-up">
          <h1 className="font-semibold  text-[40px]">Order Tracking Form</h1>
          <div className="mx-auto bg-white ">
            <h1 className="text-center text-[25px] 2xl:text-[30px] my-14 font-bold">
              Order Tracker
            </h1>
            <input
              type="text"
              className="p-3  rounded-[5px]  2xl:p-4 border-[1px] border-black outline-none w-full"
              placeholder="Order Number"
              Required
            />

            <button className="my-10 p-3  rounded-[5px] 2xl:p-4 bg-[#315031] w-full text-white  hover:bg-transparent hover:text-[#315031] border hover:border-[#315031]">
              Find Order
            </button>
          </div>

          <div className="flex">
            <div className="mx-auto my-20 text-center">
              <h1 className="font-semibold my-4 text-[20px]">
                {" "}
                Subscribe to our emails & save 15%
              </h1>
              <div className="flex gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className=" border-black border rounded-[5px] p-[15px]"
                />
                <button className="p-2 bg-[#315031] text-white text-[17px] rounded-[5px] hover:bg-transparent hover:text-[#315031] border hover:border-[#315031]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
