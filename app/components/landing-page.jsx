"use client";
import React from "react";
import Image from "next/image";
import search from "../../public/images/search.webp";
import user from "../../public/images/usera.webp";
import shopbag from "../../public/images/shopbag.webp";
import leaves from "../../public/images/leaves 1.svg";
import insta from "../../public/images/instagram 1.svg";
import cut from "../../public/images/wrong.svg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Landing = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const BG = post?.acf?.banner_section.banner_image;
  const titles = post?.acf;
  const instagram = post?.acf?.home_instagram;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://onlinebooktrip.com/wp-json/wp/v2/unique-herb-teas"
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
        setPost(data);
        setLoading(false);
        setShowButton(true);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/shop-teas");
    }, 7000);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <section>
        <div className="">
          <Navbar title={"home"} />

          <div
            className="border border-red flex 2xl:py-[0px] 2xl:h-screen xl:py-44 lg:py-[132px] md:pt-24 md:pb-24 sm:pt-20 sm:pb-20 pt-6 pb-6 h-auto xms-m xl:mt-14 2xl:mt-20 mt-[60px]"
            id="bg-poster"
            style={{
              backgroundImage: `url(${BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <div className="2xl:my-auto 2xl:ml-56 xl:mt- xl:ml-40 lg:mt-40 lg:ml-32  md:mt-32 md:ml-28 sm:mt-24 sm:ml-16  ml-8 mt-8 sticky"> */}
            <div
              className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]  lg:mx-auto   md:ml-24 sm:ml-20 my-auto ml-[12%]
              nav "
            >
              {/* 2xl:ml-56
              xl:ml-40
                   lg:ml-32
                        md:ml-20
                      sm:ml-16
                       ml-5  */}
              <h1
                id="p-font"
                className="2xl:text-[36px] 2xl:leading-[45px] text-[#50362D] xl:text-[25px] xl:leading-[20px] lg:text-[18px] lg:leading-[25px] md:text-[16px] md:leading-[20px]
                sm:text-[14px] sm:leading-[16px]
                text-[7px] leading-[10px] my-[1px] text-Mixing"
              >
                {titles?.banner_section?.banner_first_title}
              </h1>
              <h1
                id="p-font"
                className="2xl:text-[70px] 2xl:mt-2 2xl:leading-[80px] text-[#1E1E1E] 2xl:my-0   xl:text-[48px] xl:leading-[55px] lg:text-[35px] lg:my-1 lg:leading-[32px] md:text-[26px] md:leading-[30px] sm:text-[22px] sm:leading-[25px] sm:my-[2px] text-[14px] leading-[12px] my-[2px] text-Curated"
              >
                {titles?.banner_section?.banner_second_title}
              </h1>
              <h1
                id="head"
                className="2xl:text-[90px] 2xl:leading-[80px] text-[#315031] xl:text-[64px] xl:leading-[50px] lg:text-[45px] lg:leading-[45px] md:text-[30px] md:leading-[30px]
                sm:text-[25px] sm:leading-[30px] sm:my-[2px]
                text-[18px] leading-[12px] my-[3px] text-Herbal"
              >
                {titles?.banner_section?.banner_third_title}
              </h1>
              <p
                id="nav-head"
                className="2xl:text-[18px] 2xl:leading-[22px] 2xl:my-8 xl:text-[13px] xl:my-6  xl:leading-[23px] lg:text-[9px] lg:my-2  lg:leading-[20px] md:text-[6px] md:mt-0 md:leading-[12px] sm:text-[5px] sm:mt-0 sm:leading-[12px] text-[4px] mt-0 leading-[10px] pera-Explore"
              >
                {titles?.banner_section?.banner_content}
              </p>
              <div className="relative">
                {loading && (
                  <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white"></div>
                  </div>
                )}
                <Link href="/shop-teas">
                

                  {showButton && (
                    <button
                      onClick={handleClick}
                      disabled={loading}
                      className={`bg-[#1E1E1E] 2xl:mt-4 2xl:px-8 2xl:my-0 xl:mt-3 xl:px-6 lg:mt-3 lg:px-5 md:my-2 md:px-5 sm:my-2 sm:px-3 btn-curv ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <p
                        className="text-white 2xl:text-[20px] 2xl:leading-[26px] 2xl:py-[17px] 2xl:px-[16px] xl:text-[16px] xl:leading-[18px] xl:py-[14px] xl:px-[16px]
              lg:text-[12px] lg:leading-[14px] lg:py-[12px] lg:px-[7px] md:py-[5px] md:px-[3px] md:text:[8px] sm:text-[6px] sm:leading-[14px] sm:py-[3px] sm:px-[3px] text-[4px] leading-[10px] py-[1px] px-[10px] head-bttn"
                      >
                        Shop Now
                      </p>
                    </button>
                  )}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center  2xl:mt-[100px] xl:mt-16 lg:mt-16 md:mt-10 sm:mt-6 my-10">
            <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto nav ">
              <Image
                alt="img"
                src={leaves}
                className="mx-auto 2xl:w-[57.7px] 2xl:h-[51.91px] xl:w-[35px] lg:w-[25px] sm:w-8 w-5"
              />
              <h1
                id="head"
                className="text-[#1E1E1E] 2xl:text-[60px] text-center 2xl:leading-[70px] 2xl:mt-7 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[30px] lg:leading-[40px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-2 sm:text-[28px] sm:leading-[25px] sm:mt-2 text-[24px] leading-[30px] Unique-head "
              >
                {/* Unique Herbs and Spices */}
                {titles?.home_product?.first_title}
              </h1>
              <h2
                id="head"
                className="text-center 2xl:text-[36px]  2xl:leading-[56px]  xl:text-[24px]  xl:leading-[30px] xl:mt-1 lg:text-[18px]  lg:leading-[20px] lg:my-1 md:text-[18px]  md:leading-[22px] md:my-2 sm:text-[16px]  sm:leading-[20px] sm:my-1  text-[14px]  leading-[20px] my-1 noAdded-head"
              >
                {titles?.home_product?.second_title}

                {/* No Added Flavors */}
              </h2>
              <p
                id="p-font"
                className="text-[#666666] text-center  2xl:leading-[28px] 2xl:text-[18px] 2xl:mt-4 2xl:w-5/12 mx-auto 
                xl:leading-[25px] xl:text-[14px] xl:mt-4 xl:w-6/12  lg:leading-[20px] lg:text-[11px] lg:mt-3 lg:w-6/12
                md:leading-[25px] md:text-[16px] md:mt-2 md:w-6/12
                 leading-[20px] sm:text-[12px] sm:mt-2 sm:w-8/12 text-[10px] mt-1 w-8/12 Bringing-pera
              "
              >
                {titles?.home_product?.top_content}
              </p>
              {/* <div className=" mx-auto 2xl:mt-[74px] xl:mt-10 lg:mt-8 md:mt-4 sm:mt-4 mt-3">
              </div> */}
              <div className="flex justify-center flex-wrap 2xl:gap-20  lg:justify-between lg:flex-row md:gap-8 flex-col sm:gap-6 gap-6 mt-5 2xl:mt-8">
                {Array.isArray(posts) &&
                  posts.map((post) => (
                    <div
                      key={post.id}
                      data-aos="zoom-out-up"
                      className="2xl:mb-8 2xl:w-[446px] xl:w-[280px] lg:w-[200px] md:w-4/12 md:mx-0 sm:w-3/6 w-4/6 cursor-pointer mx-auto img-div"
                    >
                      <Image
                        src={post?.featured_image_url}
                        width={500}
                        height={500}
                        alt="product_img"
                        className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                      />
                      <h1 className="text-[#1E1E1E] text-center xl:text-[20px] 2xl:text-[30px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px] lg:leading-[25px] md:text-[16px] md:my-1 md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px] text-[10px] mt-1 leading-[20px] product-name font-semibold">
                        {post.title.rendered}
                      </h1>
                      <h1 className="text-center 2xl:my-3 2xl:text-[36px] 2xl:leading-[25px] xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px] lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px] text-[14px] product-price">
                        {post.acf.product_price}
                      </h1>
                      {/* <p>
                        {post.content.rendered}
                      </p> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* <div>
            <div
              className=" w-full xl:mt-[60px] 2xl:pb-48 lg:mt-12 md:mt-10 sm:mt-10 mt-5 "
              id="bg-posterS"
            >
              <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto nav">
                <h1
                  id="head"
                  className="2xl:w-full 2xl:mb-8 2xl:text-[60px] text-center 2xl:pt-28 2xl:leading-[70px] xl:mb-8 xl:text-[32px] xl:pt-10 xl:leading-[30px] lg:mb-4 lg:text-[30px] lg:pt-10 lg:leading-[70px] md:mb-6 md:text-[22px] md:pt-5 md:leading-[40px] sm:mb-4 sm:text-[20px] sm:pt-5 sm:leading-[40px] text-[22px] pt-5 leading-[40px] Find-head"
                >
                  Find Your Favorite
                </h1>
                <div className="flex flex-col  justify-between  mx-auto  sm:flex-col sm:w-1/3 sm:mx-auto 2xl:mt-4 xl:mt-1  lg:w-full  lg:flex-row">
                  <div className="  w-1/3 mx-auto sm:w-full lg:w-1/3  ">
                    <h1
                      data-aos="fade-right"
                      className="text-center  bg-[#5C161D]  2xl:mt-[36%]  text-white rounded-[8px]  2xl:w-[300px] 2xl:py-[15px]  2xl:text-[18px] 2xl:mr-20 2xl:leading-[28px]  mx-auto  xl:w-[200px] xl:mr-20  lg:mr-10  xl:py-2  xl:text-[14px] xl:leading-[20px] xl:mt-24   lg:w-8/12 lg:py-[6px]  lg:text-[12px] lg:leading-[20px] lg:mt-20  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-1  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-1  w-11/12 py-[1px]  text-[10px] leading-[30px] mt-10 find-titles hover:bg-transparent hover:text-[#5C161D] border hover:border-[#5C161D]"
                      id="head"
                    >
                      Immune Beast
                    </h1>
                    <h1
                      data-aos="fade-right"
                      className=" text-white  rounded-[8px] 2xl:w-[300px] 2xl:py-[15px]  2xl:mt-[25%]  text-center  bg-[#A47750] 2xl:text-[18px] 2xl:mr-[175px]  2xl:leading-[28px] xl:py-2 xl:mr-20 xl:text-[14px] xl:leading-[20px] xl:mt-20 xl:w-[200px] lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 lg:ml-0  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12 mx-auto sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 py-[1px]  text-[10px] leading-[30px] mt-8 w-11/12 find-titles hover:bg-transparent hover:text-[#A47750] border hover:border-[#A47750]"
                      id="head"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      data-aos="fade-right"
                      className=" text-white rounded-[8px]  w-11/12 2xl:py-[15px]  2xl:mt-[25%]  text-center  bg-[#7A8654] 2xl:w-[300px] 2xl:text-[18px] 2xl:mr-20 2xl:leading-[28px]  mx-auto  xl:mr-20  lg:mr-10  xl:py-2  xl:text-[14px] xl:leading-[20px] xl:mt-20 xl:w-[200px] lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12   sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mb-0 py-[1px] sm:mt-8  text-[10px] leading-[30px] mt-8 find-titles hover:bg-transparent hover:text-[#7A8654] border hover:border-[#7A8654]"
                      id="head"
                    >
                      Weight Wonder
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="border w-[90%] sm:mx-0 mt-10 rounded-[14px] 2xl:w-[550px] 2xl:mt-4
                     shadow-2xl 2xl:p-10 2xl:pb-3 xl:w-1/3 xl:px-10 xl:py-6 xl:pb-0 lg:px-6 lg:mt-0 lg:w-1/3 lg:py-4 lg:pb-0 md:px-5 md:py-3 md:mt-10 sm:mt-10 md:pb-0 sm:px-5 sm:py-3 sm:pb-0 sm:w-full sm:my-2 px-3 p-5  find-div"
                  >
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[39px] 2xl:mb-3 xl:text-[16px]  xl:leading-[30px] xl:mb-2  lg:text-[16px]  lg:leading-[25px] lg:mb-1  md:text-[14px]  md:leading-[20px] md:mb-1  sm:text-[18px]  sm:leading-[30px] sm:mb-1 text-[16px]  leading-[30px] mb-1 suli"
                    >
                      Suli’s Sample Box
                    </h1>

                    <Image src={groupP} alt="img" className=" flex mx-auto" />
                    <h1
                      id="head"
                      className="text-center  2xl:text-[36px] 2xl:leading-[37px] 2xl:mt-[30px]   xl:text-[25px] xl:leading-[30px] xl:mt-4 lg:mt-3 lg:text-[20px] lg:leading-[25px]  md:mt-3 md:text-[18px] md:leading-[20px]   sm:mt-1 sm:text-[18px] sm:leading-[25px]    mt-1 text-[14px] leading-[20px] find-price"
                    >
                      {" "}
                      $17.00
                    </h1>

                    <div className="flex justify-center">
                      <Link href="/shop-teas">
                        <button className="bg-black  2xl:my-6   2xl:px-10  xl:mt-4 xl:px-0  lg:my-4 lg:px-0  md:my-4 md:px-0  sm:my-2 sm:px-0 my-2 sm:mb-2 btn-curv find-btn-curv">
                          <p
                            className="text-white 2xl:text-[20px] 2xl:leading-[22px] 2xl:py-[18px] 2xl:px-[16px]  xl:text-[14px] xl:leading-[20px] xl:py-[12px] xl:px-10 lg:text-[12px] lg:leading-[16px]  lg:px-[24px]  md:text-[10px] md:leading-[12px] md:py-[10px] md:px-[16px] sm:text-[10px] sm:leading-[8px] sm:py-[8px]  sm:px-[14px] text-[8px] leading-[10px] py-[10px] px-[20px]  find-btn "
                            id="head"
                          >
                            Buy Now
                          </p>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className=" w-1/3 mx-auto flex flex-col   sm:w-full lg:w-1/3">
                    <h1
                      data-aos="fade-left"
                      className="  text-white  bg-[#32504D] 2xl:mt-[36%] text-center rounded-[8px] mx-auto w-11/12 2xl:w-[300px] 2xl:py-[15px]   2xl:text-[18px] 2xl:ml-[80px] 2xl:leading-[28px] xl:ml-20 xl:mt-24 xl:py-2 xl:text-[14px] xl:leading-[20px] xl:w-[200px]   lg:ml-10  lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-20 md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-10 py-[1px]  text-[10px] leading-[30px] mt-10 find-titles  hover:bg-transparent hover:text-[#32504D] border hover:border-[#32504D]"
                      id="head"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      data-aos="fade-left"
                      className="   text-white rounded-[8px]  w-11/12 text-center bg-[#482E69] 2xl:py-[15px] 2xl:w-[300px] 2xl:text-[18px] 2xl:mt-[25%] 2xl:leading-[28px] 2xl:ml-[180px]  xl:py-2  xl:text-[14px] xl:leading-[20px ] xl:w-[200px] xl:mr-0 xl:mt-20 lg:mr-0  lg:w-8/12    lg:mt-14 lg:py-[6px] lg:text-[12px] lg:leading-[20px] md:w-9/12 md:py-[5px]  md:mx-auto md:text-[14px] md:leading-[22px] md:mt-12   sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 mx-auto py-[1px]  text-[10px] leading-[30px] mt-8 div-Champion find-titles  hover:bg-transparent hover:text-[#482E69] border hover:border-[#482E69]"
                      id="head"
                    >
                      Flair Fighter
                    </h1>
                    <h1
                      data-aos="fade-left"
                      className=" text-white rounded-[8px]  mx-auto  w-11/12 text-center  bg-[#7D062A] 2xl:w-[300px] 2xl:py-[15px] 2xl:mt-[25%]  2xl:text-[18px] 2xl:ml-[80px] 2xl:leading-[28px] xl:ml-20 xl:mt-20 xl:py-2  xl:text-[14px] xl:leading-[20px] xl:w-[200px]  lg:ml-10  lg:py-[6px]  lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 md:w-9/12 md:py-[5px]  md:text-[14px] md:mx-auto  md:leading-[22px] md:mt-12  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 py-[1px]  text-[10px] leading-[30px] mt-8 find-titles hover:bg-transparent hover:text-[#7D062A] border hover:border-[#7D062A]"
                      id="head"
                    >
                      Detox Delite
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" sm:w-full mx-auto2xl:mt-36 2xl:mt-40 xl:mt-32 lg:mt-20 sm:mt mb-10 ">
            <div className=" 2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]  mx-auto  nav">
              <div className="mt-12 ">
                <h1
                  className="2xl:text-[26px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#315031] text-center Instagram-head"
                  id="p-font"
                >
                  {titles?.home_instagram?.instagram_title}
                </h1>
                <h1
                  className=" text-[25px] text-center 2xl:text-[60px] 2xl:leading-[70px] 2xl:mt-[10px] xl:text-[40px] xl:leading-[40px] xl:mt-1 lg:text-[35px] lg:leading-[30px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-1  sm:text-[30px] sm:leading-[30px] leading-[35px]  sm:mt-1 SuliTeas"
                  id="head"
                >
                  {titles?.home_instagram?.instagram_second_title}
                </h1>
              </div>

              <div
                data-aos="fade-up"
                className=" flex flex-col lg:flex-row justify-between 2xl:mt-[40px]  xl:mt-2 lg:mt-4 last-div"
              >
                {/* className="flex  xl:mx-auto  sm:flex-col gap-4 2xl:gap-[10px] xl:gap-4  xl:mt-6 lg:mt-4 md:mt-2 sm:mt-1 mt-1 flex-col relative md:flex-col lg:flex-row 2xl:justify-between" */}
                <div
                  id="image2"
                  className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] last-img"
                >
                  <Image
                    id="img1"
                    alt="img"
                    src={instagram?.instagram_first_iimage}
                    width={500}
                    height={500}
                    className=" 2xl:w-[291px] 2xl:h-[292px] xl:w-40 lg:w-24 md:w-32 sm:w-28  mx-auto last-img"
                  />
                  <div className="img3">
                    <Image id="img4" alt="img" src={insta} />
                  </div>
                </div>

                <div
                  id="image2"
                  className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] last-img"
                >
                  <Image
                    id="img1"
                    alt="img"
                    src={instagram?.instagram_second_iimage}
                    width={500}
                    height={500}
                    className=" 2xl:w-[291px] 2xl:h-[292px] xl:w-40 lg:w-24 md:w-32 sm:w-28  mx-auto last-img"
                  />
                  <div className="img3">
                    <Image alt="img" id="img4" src={insta} />
                  </div>
                </div>

                <div
                  id="image2"
                  className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] last-img"
                >
                  <Image
                    id="img1"
                    alt="img"
                    src={instagram?.instagram_third_iimage}
                    width={500}
                    height={500}
                    className=" 2xl:w-full xl:w-40 lg:w-24   md:w-32 sm:w-28 w-full  last-img"
                  />
                  <div className="img3">
                    <Image id="img4" alt="img" src={insta} />
                  </div>
                </div>

                <div
                  id="image2"
                  className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] last-img "
                >
                  <Image
                    id="img1"
                    alt="img"
                    src={instagram?.instagram_fourth_iimage}
                    width={500}
                    height={500}
                    className=" 2xl:w-full xl:w-40 lg:w-24 md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" alt="img" src={insta} />
                  </div>
                </div>
                <div
                  id="image2"
                  className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] last-img"
                >
                  <Image
                    id="img1"
                    alt="img"
                    src={instagram?.instagram_five_iimage}
                    width={500}
                    height={500}
                    className=" 2xl:w-full xl:w-40 lg:w-24   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" alt="img" src={insta} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Landing;
