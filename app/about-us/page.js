"use client";
import React, { useState } from "react";
import search from "../../public/images/search.webp";
import user from "../../public/images/usera.webp";
import shopbag from "../../public/images/shopbag.webp";
import lady from "../../public/images/Rectangle_60.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../navbar";
import Footer from "../footer";
const page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <>
      <Navbar />
      <div className="2xl:mt-[150px] xl:mt-32 lg:mt-28 sm:mt-12 mt-12 2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px] md:w-[620px] sm:w-[600px] w-[85%] flex justify-between m-auto nav">
        <div>
          <div className="container mx-auto  mt-12 md:mt-16">
            <div className="flex flex-col lg:flex-row bg-[#f4eeee] w-[100%]">
              <div className="w-[50%] flex mx-auto">
               <div> <Image src={lady} className="h-auto lg:h-[100%] w-[100%] mx-auto pt-5 lg:pt-0" /></div>

              </div>
              <div className="lg:w-[50%] ">
                <div className="p-6 md:p-8 text-center">
                  
                  <h1
                    id="head"
                    className="text-[#1E1E1E] 2xl:text-[60px] text-left 2xl:leading-[70px] 2xl:mt-7 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[30px] lg:leading-[40px] lg:mt-1 md:text-[22px] md:leading-[30px] md:mt-2 sm:text-[18px] sm:leading-[25px] sm:mt-2 text-[16px] leading-[30px] Unique-head  md:mb-8"
                  >
                    Becoming epilepsy2 entrepreneur
                  </h1>
                  <p
                    id="p-font"
                    className="text-[#666666] text-left  Bringing-pera my-4 md:my-6 2xl:my-10 text-[12px] lg:[16px]
              "
                  >
                    My name is Teri, I created Suli teas based on what I loved
                    to drink and what my family and I drank when we had various
                    symptoms. While none of my teas are a cure for anything,
                    they are supportive and have gotten me through some of my
                    toughest days.
                  </p>

                  <p
                    id="p-font"
                    className="text-[#666666] text-left  Bringing-pera my-6 2xl:my-10 text-[12px] lg:[16px]
              "
                  >
                    I have fought epilepsy, autoimmune, and anxiety since I was
                    a child, but in my 30s I wanted to finally get to the root
                    of my issues. Diet was definitely key, while also
                    eliminating triggers like caffeine, and added flavors in all
                    my foods and drinks. I learned I could support myself and
                    family with particular herbs. I could create great flavors
                    that were enjoyable for us and guests.
                  </p>

                  <p
                    id="p-font"
                    className="text-[#666666] text-left  mt-1  Bringing-pera text-[12px] lg:[16px]
              "
                  >
                    I went on the hunt for more than the standard boring
                    lavender and echinacea. I wanted to know what worked and
                    what tasted best. I chose herbs that were used for thousands
                    of years or had new studies showing their uses. I also
                    worked with the herbs Anthony William has recommended.
                    Following his advice stopped my anxiety, and led me to
                    manage my other illnesses, experience true health freedom
                    and truly enjoy the little things in life.
                  </p>
                  <br />
                  <p
                    id="p-font"
                    className="text-[#666666] text-left Bringing-pera text-[12px] lg:[16px]
              "
                  >
                    The flavors I have available are my favorites and most used.
                    I hope you enjoy them as much as I have.{" "}
                  </p>
                </div>
              </div>
            </div>
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
                <button className="p-2 bg-[#315031] text-white text-[17px] rounded-[5px]">
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
