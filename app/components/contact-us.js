"use client";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#F1F3F6] h-screen ">
        <Navbar />
        <div className="2xl:mt-[135px] xl:mt-20 lg:mt-28 sm:mt-24 mt-12 2xl:w-[1500px] xl:w-[1000px]  lg:w-[800px] md:w-[620px] sm:w-[600px] w-[420px] flex justify-between m-auto nav">
          <div className="w-full 2xl:mt-10">
            <div className="w-2/3 mx-auto my-14" data-aos="fade-up">
              <h1 className="font-semibold w-full text-[40px] my-10  ">
                GET IN TOUCH
              </h1>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 2xl:p-5  text-[14px] 2xl:text-[22px] border-[0.5px] border-black outline-none w-1/2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 2xl:p-5  text-[14px] 2xl:text-[22px] border-[0.5px] border-black outline-none w-1/2"
                />
              </div>
              <input
                type="number"
                placeholder="Number"
                className="p-2 2xl:p-5  text-[14px] 2xl:text-[22px] border-[0.5px] border-black outline-none w-full mt-5  2xl:mt-10 "
              />
              <textarea
                placeholder="Comment"
                className="p-2 2xl:p-5  text-[14px] 2xl:text-[22px] border-[0.5px] border-black outline-none w-full mt-5  2xl:mt-10 "
              />

              <button className="xl:text-[16px] 2xl:text-[25px] 2xl:my-7  font-bold border px-6 py-2 2xl:px-10 2xl:py-4 rounded-md mt-3 bg-[#315031] text-white hover:border hover:border-[#315031] hover:text-[#315031] hover:bg-transparent">
                Send
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ContactUs;
