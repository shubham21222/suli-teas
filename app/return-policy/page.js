import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] w-[420px]  m-auto nav 2xl:mt-[180px] xl:mt-32 lg:mt-28 sm:mt-24 mt-20 nav">
        <div className="" data-aos="fade-up">
          <h1 className="font-semibold w-full text-[35px] my-6 ">
            Refund policy
          </h1>
          <p className="text-[#6d6c6c] leading-7 text-[15px] 2xl:text-[20px] 2xl:my-5 my-4  2xl:leading-8">
            No returns on opened products. We accept returns or exchanges for
            product damaged in transit or if the incorrect product was shipped.
            To be eligible for a return or exchange you must first email within
            15 days of the order date. If a replacement is not available we will
            refund the full purchase price.
          </p>
          <p className="text-[#6d6c6c] leading-7 text-[15px] 2xl:text-[20px] 2xl:my-5 mt-6  2xl:leading-8">
            Contact
          </p>
          <p  className="text-[#6d6c6c] leading-7 text-[15px] 2xl:text-[20px] 2xl:my-5 my-0  2xl:leading-8">
            <Link href="mailto:someone@example.com">info@suliteas.com</Link>
          </p>
          <div className="flex">
            <div className="mx-auto my-20 text-center">
              <h1 className="font-semibold my-4 text-[20px]">
                {" "}
                Subscribe to our emails & save 15%
              </h1>
             <div className="flex gap-5">
             <input type="email" placeholder="Email" className=" border-black border rounded-[5px] p-[15px]" />
              <button className="p-2 bg-[#315031] text-white text-[17px] rounded-[5px]">Subscribe</button>
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
