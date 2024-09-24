"use client";
import React, { useState } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const faqData = [
  {
    question: "Return policy",
    answer:
      "No returns on opened products. We accept returns or exchanges for products damaged in transit or if the incorrect product was shipped. To be eligible for a return or exchange you must first email within 15 days of the order date. If a replacement is not available we will refund the full purchase price To be eligible for a return or exchange you must first email within 15 days of the order date. If a replacement is not available we will refund the full purchase price.",
  },
  {
    question: "Shipping policy",
    answer:
      "Orders are shipped within 1-2 days with USPS with Priority, 1-4 days or Ground Advantage, 2-5 days, whichever was chosen at checkout.",
  },
  {
    question: "Are your teas organic:",
    answer:
      "All Suli Teas ingredients are either certified organic or wild crafted, also known as wild harvesting. Wild crafted is the preferred option when available because it is the practice of harvesting plants from their natural habitat while taking care to leave enough of the mother plant to ensure sustainability.Harvesters also have to demonstrate non-interference with the wild crops in accordance with the Organic Food Production Act of 1990. These wild harvested herbs are naturally organic but cannot be certified as such because they are not under the control of growers and processors.",
  },
  {
    question: "Do the teas go bad?",
    answer:
      "Herbs and tea kept away from moisture do not go bad. It is common to see dates on tea products 18 months to 2 years for optimal freshness, but this does not mean the product is unsafe. Keeping tea away from heat, light and moisture will keep the flavors fresher longer.",
  },
  {
    question: "What are your tea bags made from?",
    answer:
      " All tea bags are made from unbleached plant fiber, are biodegradable, and contain zero plastic or metal.",
  },
  {
    question: " Are your teas allergen free?",
    answer:
      " Suli Teas are free from all common allergens such as gluten, dairy nuts, coconut, eggs, corn, soy, and shellfish.",
  },
  {
    question: "How do I make a creamy chai?",
    answer:
      "  My favorite way is to brew 1 Champion Chai tea bag and add 1-2 tbsp each of lite coconut milk and pure maple syrup, and a sprinkle of pure stevia extract.",
  },
  {
    question:
      "Does Wonder Wonder or Detox Delete cause you to go to the bathroom?",
    answer:
      "   Senna is commonly used in many cheaply made detox and weight loss teas. Suli Teas does not use any ingredients that purposely cause loose bowel movements. We use proven herbs that get to the root of issues and add support from there.",
  },
  {
    question: "  Will weight wonder really make me lose weight?",
    answer:
      "    Most weight loss teas are just generic cheap ingredients with convincing packaging. Weight wonder was curated with the fact that many people carrying extra weight actually have fluid retention from a toxic liver. The herbs in this blend work together to support the lymphatic system through their natural diuretic properties without losing electrolytes, as well as supporting the liver and metabolism.",
  },
  {
    question: "Why caffeine free?",
    answer:
      "  Caffeine is a drug and a stress to the system no matter how many superfoods some may add to it. It may give superficial energy for the moment but it stresses the system in the long run by creating a false flight or flight response. In today s world of ADD, depersonalization and anxiety caffeine is one of the worst triggers for symptoms, and for many it creates the opposite effect of brain fog and fatigue. Instead I found legendary plant medicines used for millennia that support the body, provide energy or relief without addictive harmful ingredients.",
  },
  // Add more FAQ items as needed
];
const page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Navbar title={"faqs"} />
      <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] w-[100%]  m-auto nav 2xl:mt-[180px] xl:mt-32 lg:mt-28 sm:mt-24 mt-20">
        <div className=" mx-auto " data-aos="fade-up">
          <h1 className="font-semibold text-[25px] sm:text-[30px] lg:text-3xl my-10 ">FAQs</h1>
          <div>
            {faqData.map((faq, index) => (
              <div key={index} className="mt-4 border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-[#6d6c6c] font-medium text-[16px] 2xl:text-[18px] py-3">
                    {faq.question}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`panel ${
                    activeIndex === index ? "show" : "hidden"
                  } text-gray-700 2xl:text-[18px] 2xl:leading-8 my-2 leading-7`}
                >
                  <p className="text-[16px] 2xl:text-[18px]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto my-20 text-center">
            <h1 className="font-semibold my-4 text-[20px]">
              {" "}
              Subscribe to our emails & save 15%
            </h1>
            <div className="flex justify-center gap-5">
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
      <Footer />
    </>
  );
};

export default page;
