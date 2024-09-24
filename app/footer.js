"use client";
import React, { useEffect, useState } from "react";
import twitter from "../public/images/twitter.svg";
import fbb from "../public/images/facebook.svg";
import insta from "../public/images/instagram.svg";
import music from "../public/images/tiktok.svg";
import YTt from "../public/images/youtube.svg";
import arrow from "../public/images/arrow.svg";
import Link from "next/link";
import Image from "next/image";
import leaves from "../public/images/leaves 1.svg";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(posts, "postass");
  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://onlinebooktrip.com/wp-json/wp/v2/pages/54"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);
  const logo = posts.acf;
  return (
    <>
      <div>
        <footer className="bg-[#E9F5DE] 2xl:pt-[20px] 2xl:mt-[100px] xl:pt-4 xl:mt-20  lg:pt-0 lg:mt-16 md:pt-5 md:mt-0 sm:pt-5 sm:mt-10  mt-10 font-size: 16px !important;">
          <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]   mx-auto lg:flex  lg:justify-around lg:flex-row  xl:flex xl:flex-row  2xl:mx-auto 2xl:flex 2xl:justify-around   2xl:mb-10 xl:mb-2 lg:mb-8 md:flex-col md:justify-center md:mb-10 sm:flex-col sm:justify-center sm:mb-5  flex-col justify-center nav"></div>
          <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px] md:w-[620px] sm:w-[550px]  mx-auto lg:flex  lg:justify-around lg:flex-row  xl:flex xl:flex-row  2xl:mx-auto 2xl:flex 2xl:justify-around   2xl:mb-10 xl:mb-2 lg:mb-8 md:flex-col md:justify-center md:mb-10 sm:flex-col sm:justify-center sm:mb-5  flex-col justify-center nav">
            <div className="flex flex-col sm:flex sm:flex-col md:flex-row 2xl:justify-between mx-auto lg:w-full lg:m-0 xl:w-[70%]  2xl:w-[90%] xl:m-0 md:w-full md:my-5 sm:w-10/12  sm:my-5 ">
              <div className=" md:w-1/4 w-full pt-5 sm:pt-0 md:pt-0 lg:py-0 flex  items-center">
               
                <div className="mx-auto md:mx-0">
                  <Link href="/">
                    <Image
                      src={logo?.home_logo?.home_logo_image}
                      width={197}
                      height={68}
                      className="w-24 xl:w-40  2xl:w-52   mx-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="mx-auto sm:my-5  my-5 w-1/3 md:w-1/4 text-center md:text-left ">
                <h1
                  className="list-none cursor-pointer 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-hesdings"
                  id="b-font"
                >
                  Quick links
                </h1>
                <Link href="/">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Home
                  </li>
                </Link>
                <br />

                <Link href="/shop-teas">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Shop Teas
                  </li>
                </Link>
                <br />
                <Link href="/about-us">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    About Me
                  </li>
                </Link>
                <br />
                <Link href="/contact-us">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Contact Us
                  </li>
                </Link>
              </div>

              <div className="mx-auto sm:my-5 my-5 w-1/3 md:w-1/4 text-center md:text-left">
                <h1
                  className="list-none 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  cursor-pointer  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-hesdings"
                  id="b-font"
                >
                  Other Links
                </h1>
                <Link href="/privacy-policy">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Privacy Policy
                  </li>
                </Link>
                <br />
                <Link href="/return-policy">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Refund & Return Policy
                  </li>
                </Link>
                <br />
                <Link href="/service">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Terms of Service
                  </li>
                </Link>
                <br />
                <Link href="/order-track">
                  <li
                    id="hover-underline-animation"
                    className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                  >
                    Order Tracking
                  </li>
                </Link>
              </div>

              {/* <div className="sm:mx-auto sm:my-5 mx-auto my-5 ">
                <h1
                  className="list-none cursor-pointer 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-hesdings"
                  id="b-font"
                >
                  My Account
                </h1>
                <li
                  id="hover-underline-animation"
                  className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                >
                  Shopping Bag
                </li>
                <br />

                <li
                  id="hover-underline-animation"
                  className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                >
                  Wish List
                </li>
                <br />
                <li
                  id="hover-underline-animation"
                  className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                >
                  Order History
                </li>
                <br />
                <li
                  id="hover-underline-animation"
                  className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] footer-0ptions"
                >
                  Order Tracking
                </li>
              </div> */}
            </div>

            <div
              className="flex justify-center my-4
              5 md:flex md:justify-center sm:flex sm:justify-center lg:w-4/12 lg:flex-none xl:flex-none xl:w-3/12 2xl:w-3/12 "
            >
              <div className=" relative lg:w-10/12 xl:w-full 2xl:w-full  md:w-6/12 sm:w-5/12 w-5/12 mx-auto text-center lg:text-left">
                <h1
                  className="list-none cursor-pointer  2xl:my-4 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:mt-2 xl:leading-[20px] xl:text-[14px] lg:my-2 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] mb-2 footer-hesdings"
                  id="b-font"
                >
                  Subscribe to our emails
                </h1>
                <Image
                  alt="img"
                  src={arrow}
                  className="absolute z-20 ml-[150px] mt-2 2xl:w-7  2xl:ml-[335px]  2xl:mt-[10px] 2xl:mb-4 xl:w-4  xl:ml-[220px]  xl:mt-[11px] lg:ml-[220px] lg:w-4 lg:mt-[6px]  md:w-3 md:mt-[10px] md:ml-[290px] sm:w-3 sm:mt-2 sm:ml-[210px] arrow w-3"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="flex cursor-pointer border relative border-[#315031] bg-[#E9F5DE]  rounded  2xl:w-full 2xl:mt-3 2xl:p-[11px] xl:p-[2px] xl:pl-[8px] lg:p-[1px] lg:pl-[8px] xl:w-full xl:mt-3 lg:w-full  lg:mt-2 w-[100%] sm:w-full sm:my-1 px-1 md:p-1 md:w-12/12  mx-auto"
                />
                <div className="flex justify-center md:justify-center lg:justify-start sm:justify-center 2xl:gap-7  2xl:my-5 xl:gap-5  xl:my-3 lg:my-2 lg:gap-4 md:my-5 sm:my-5 md:w-11/12  md:gap-4 sm:gap-4 my-2 gap-4  ">
                  <Link href="https://twitter.com/" target="_blank">
                    <Image
                      alt="img"
                      src={twitter}
                      className=" 2xl:w-[18px] xl:w-[22px] lg:w-[14px] md:w-[14px] w-[14px] "
                    />
                  </Link>
                  <Link href="https://www.facebook.com/login/" target="_blank">
                    <Image
                      alt="img"
                      src={fbb}
                      className=" 2xl:w-5 xl:w-6 lg:w-4 md:w-4 w-4"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                  >
                    <Image
                      alt="img"
                      src={insta}
                      className=" 2xl:w-5 xl:w-6 lg:w-4 md:w-[16px] w-4 "
                    />
                  </Link>
                  <Link
                    href="https://accounts.spotify.com/en/login"
                    target="_blank"
                  >
                    <Image
                      alt="img"
                      src={music}
                      className=" 2xl:w-5 xl:w-[22px] lg:w-4 md:w-4 w-4"
                    />
                  </Link>
                  <Link href="https://www.youtube.com/" target="_blank">
                    <Image
                      alt="img"
                      src={YTt}
                      className=" 2xl:w-6 xl:w-6 lg:w-[18px] md:w-[16px] w-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-auto 2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  opacity-[50%] sm:w-[70%]   border-[#315031] nav " />
          <h1 className=" 2xl:text-[16px] 2xl:py-4 2xl:leading-[24px] xl:text-[12px]  xl:leading-[20px] lg:text-[12px]  lg:leading-[20px]  text-[#666666] text-center  md:text-[12px]  md:leading-[20px] sm:text-[12px]  sm:leading-[20px] text-[12px] py-3 footer-0ptions">
            © 2024 Teas. All Rights Reserved.
          </h1>
        </footer>
      </div>
    </>
  );
};

export default Footer;
