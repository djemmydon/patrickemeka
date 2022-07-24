import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useTypewriter} from 'react-simple-typewriter'

const project = [
  // {
  //   time: " Latest Product",
  //   name: " Kinox Apparel",
  //   about:
  //     " Kinox website is a great website built with great functiioning tool",
  // },
  // {
  //   time: " Latest Product",
  //   name: " Crypto Tracker",
  //   about:
  //     " Kinox website is a great website built with great functiioning tool",
  // },
  {
    time: " Welcome !!",
    name: " I Am A Web Designer",
    about:
      " Kinox website is a great website built with great functiioning tool",
  },
];

import { EffectFade, Navigation, Pagination } from "swiper";

function Hero() {
  const {text} = useTypewriter({
    words: ['Web Designer', 'Web Developer', 'Graphics Designer',],
    loop:0, // Infinit
  })

  return (
    <div className="  h-full text-white ">
      <div className="container mx-auto flex flex-wrap center justify-center py-10 ">
        <div className="py-16 flex flex-col ">
          {project.map((item, idx) => (
            <div className="" key={idx}>
              <h5 className=" text-2xl font-bold uppercase font-heading pb-2 text-[#89715b]">{item.time}</h5>
              <h1 className="text-5xl md:text-5xl lg:text-5xl font-zilla  ">
                I Am A {text}
              </h1>
              <p className="text-sm font-monts">{item.about}</p>
            </div>
          ))}

          <div className="flex py-3">  
            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <AiFillGithub size={20} color="#89715b" />
            </div>

            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <AiFillLinkedin size={20} color="#89715b"/>
            </div>
            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <MdEmail size={20} color="#89715b"/>
            </div>
          </div>
        </div>

        <div className="relative">
        <div className=" w-60 h-60 md:w-80 md:h-80 top-0 left-24 md:left-20  absolute rounded-full bg-[#3e4491] "></div>

            <div className="relative py-10 ">
            <img src="/home.png" alt="" />

            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
