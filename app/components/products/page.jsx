"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = ({posts}) => {


  return (
    <>
      <div className="flex justify-center flex-wrap 2xl:gap-20  lg:justify-between lg:flex-row md:gap-8 flex-col sm:gap-6 gap-6 h-screen">
     
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
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
