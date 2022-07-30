import React, { useEffect } from "react";
import { BiCodeAlt } from "react-icons/bi";
import Header from "./UI/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatAbouMe = [
  {
    heading: "UNIQUE DESIGN",
    paragraph: "Bring the beautifully for your Project. Just enjoy!.",
    icons: "BiCodeAlt",
  },

  {
    heading: "READABLE CODE",
    paragraph: "Bring the beautifully for your Project. Just enjoy!.",
  },

  {
    heading: "TIME CONSCIOUS",
    paragraph: "Bring the beautifully for your Project. Just enjoy!.",
  },

  {
    heading: "TEAM WORK",
    paragraph: "Bring the beautifully for your Project. Just enjoy!.",
  },
];

function Why() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container mx-auto text-white p-10"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <Header name="Why  Me" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-4 justify-items-center ">
        {WhatAbouMe.map((item, idx) => (
          <div
            key={idx}
            className=" w-64  h-52 border-[1px] p-5 relative group hover:origin-center hover:rotate-12  transition ease-in-out duration-500 cursor-pointer"
          >
            <h1 className=" text-2xl font-bold pb-5 group-hover:text-black font-zilla">
              {item.heading}
            </h1>
            <p className=" text-sm font-medium pb-5 group-hover:text-black font-monts">
              {item.paragraph}
            </p>

            <div className=" absolute top-0 left-0  transition ease-in-out duration-500 -z-10  group-hover:bg-white w-full h-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
