"use client";
import React, { useState, Fragment, useEffect } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import cut from "../public/images/wrong.svg";
import leaves from "../public/images/leaves 1.svg";
import user from "../public/images/usera.webp";
import shopbag from "../public/images/shopbag.webp";
import Link from "next/link";
import { useCart } from "./create-context/cart-context";

const Navbar = ({ title }) => {
  const { cart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogMatch, setDialogMatch] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
    });
    setDialogMatch(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
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
    <div>
      <nav className="border 2xl:py-8 xl:py-4 lg:py-4 md:py-4 sm:py-3 py-3  bg-white fixed top-0 w-full z-50 navv">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px] grid grid-cols-3 m-auto nav">
          <div id="nav-menu" className=" my-auto ">
            <div className="flex 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-4 sm:gap-2 py-auto ">
              <div>
                <Link href="/">
                  {title === "home" ? (
                    <li
                      id="nav-head"
                      className="cursor-pointer text-[#000]  border-b-[2px] border-[#000] list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2  hover:border-[#fff]"
                    >
                      Home
                    </li>
                  ) : (
                    <li
                      id="nav-head"
                      className="cursor-pointer list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 text-[#666666] "
                    >
                      Home
                    </li>
                  )}
                </Link>
              </div>
              <div className="my-auto ">
                <Link href="/shop-teas">
                  {title === "shop-tea" ? (
                    <li
                      id="nav-head"
                      className="cursor-pointer text-[#000]  border-b-[2px] border-[#000] list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 hover:border-[#fff] "
                    >
                      Shop Teas
                    </li>
                  ) : (
                    <li
                      id="nav-head"
                      className="cursor-pointer list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 text-[#666666] "
                    >
                      Shop Teas
                    </li>
                  )}
                </Link>
              </div>
              <div>
                <Link href="/FAQ">
                  {title === "faqs" ? (
                    <li
                      id="nav-head"
                      className="cursor-pointer text-[#000]  border-b-[2px] border-[#000] list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 hover:border-[#fff] "
                    >
                      FAQs
                    </li>
                  ) : (
                    <li
                      id="nav-head"
                      className="cursor-pointer list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 text-[#666666] "
                    >
                      FAQs
                    </li>
                  )}
                </Link>
              </div>
            </div>
          </div>

          <div className=" ml-3" id="nav-drawer">
            <div className="text-center my-auto flex justify-start ">
              <button
                className="  focus:ring-4  font-medium rounded-lg text-[10px] focus:outline-none "
                type="button"
                onClick={openDrawer}
              >
                <div className="mt-3 ">
                  <div className="bg-black sm:p-[1.2px] md:p-[1.5px] p-[1px] my-1 sm:w-6 w-5"></div>
                  <div className="bg-black sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                  <div className="bg-black sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                </div>
              </button>
            </div>
            {/* Drawer */}
            {isDrawerOpen && (
              <div
                id="drawer-form"
                className="fixed top-0 left-0 z-40 h-screen  overflow-y-auto transition-transform -translate-x-0 bg-white w-5/12 sm:w-3/12 dark:bg-gray-800 xsm-drawer"
                tabIndex={-1}
                aria-labelledby="drawer-form-label"
              >
                <div>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="text-gray-400  shadow-2xl text-sm  p-1 mt-2 mr-2 border rounded-lg float-right "
                  >
                    <Image src={cut} className="mx-auto md:w-5 sm:w-4 w-3" />
                  </button>
                </div>
                <div className="mt-10 ">
                  <div className=" lg:w-3/12 xl:w-2/12 md:w-full sm:w-full my-4">
                    <Image
                      src={leaves}
                      className="mx-auto md:w-10 sm:w-6 w-4"
                    />

                    <h1
                      className=" 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[25px] md:mb-5 sm:text-[20px] sm:mb-5 text-[14px]  text-center"
                      id="nav-head"
                    >
                      TEAS
                    </h1>
                  </div>
                  <hr />
                  <ul className="flex flex-col text-center">
                    <Link href="/shop-teas">
                      <li
                        id="hover-underline-animation"
                        className=" text-[#666666] text-[10px] sm:text-sm first-letter:uppercase text-center mt-2 mx-auto"
                      >
                        Shop Teas
                      </li>
                    </Link>

                    <Link href="/about-us">
                      <li
                        id="hover-underline-animation"
                        className=" text-[#666666] text-[10px]  sm:text-sm first-letter:uppercase text-center mx-auto"
                      >
                        About Me
                      </li>
                    </Link>
                    <Link href="/FAQ">
                      <li
                        id="hover-underline-animation"
                        className=" text-[#666666] text-[10px]  sm:text-sm first-letter:uppercase text-center mx-auto"
                      >
                        FAQs
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center  ">
            {/* <h1
              className="my-auto 2xl:text-[35px] xl:text-[25px] lg:text-[20px] md:text-[18px]  sm:text-[16px] text-[14px]"
              id="nav-head"
            >
              TEAS
            </h1> */}
            <Link href="/">
              {/* <img
                alt="logo"
                src="/images/logo.png"
                className="w-24 md:w-32 xl:w-40 2xl:w-52 mx-auto"
              /> */}
              <Image
                src={logo?.home_logo?.home_logo_image}
                width={197}
                height={68}
                alt="product_img"
                className="w-24 md:w-32 xl:w-40 2xl:w-52 mx-auto"
              />
            </Link>
          </div>

          <div className="relative mr-6 xl:mr-0 lg:mr-0 flex justify-end 2xl:gap-10 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-3 my-auto ">
            <button onClick={() => setDialogMatch(true)}>
              <Image
                alt="img"
                src={user}
                className="cursor-pointer 2xl:w-[21px] 2xl:h-[23px] xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4  sm:w-[14px] w-3"
              />
            </button>
            <button className="relative">
              <Link href="/cart">
                {cart.length > 0 && (
                  <span className="absolute p-1 rounded-full top-[-25px] text-white bg-[#315031] text-[12px]">
                    {cart.length}
                  </span>
                )}
                <Image
                  alt="img"
                  src={shopbag}
                  className="cursor-pointer 2xl:w-[21px] 2xl:h-[23px]  xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4  sm:w-[14px] w-3 relative"
                />
              </Link>
            </button>
          </div>
        </div>
      </nav>
      {/* ----------popup----------- */}
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setDialogMatch(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-2 lg:px-8 2xl:p-4 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setDialogMatch(false)}
                      className="w-8"
                    >
                      <img
                        src="/images/wrong.svg"
                        className="w-6"
                        alt="close"
                      />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[20px] xl:text-[30px] font-semibold  text-gray-900 flex justify-center"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center">
                    <form onSubmit={handleSubmit} className="">
                      <input
                        className="custom_input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <input
                        className="custom_input"
                        type="password"
                        id="password"
                        name="email"
                        placeholder="Password"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <div className="flex justify-center">
                        <button
                          className="xl:text-[16px] 2xl:text-[18px] 2xl:my-5  font-bold border px-6 py-1 rounded-md mt-3 bg-[#315031] text-white hover:border hover:border-[#315031] hover:text-[#315031] hover:bg-transparent"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;
