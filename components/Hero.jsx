import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

import AOS from "aos";
import "aos/dist/aos.css";

import { EffectFade, Navigation, Pagination } from "swiper";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { text } = useTypewriter({
    words: ["Web Designer", "Web Developer", "Graphics Designer"],
    loop: 0, // Infinit
  });

  return (
    <div className="  h-full text-white ">
      <div className="container  mx-auto flex flex-wrap center justify-center py-10  ">
        <div className="px-4 py-12 md:py-48 flex flex-col w-full  md:w-[500px]">
          <div className="">
            <h5
              className=" text-1xl font-bold uppercase font-heading pb-2 text-[#89715b] -z-10"
              data-aos="fade-up"
              data-aos-offset="200"
              
              data-aos-delay="50"
            >
              Welcome
            </h5>
            <h1
              className="text-2xl md:text-5xl lg:text-5xl font-zilla  "
              data-aos="fade-up"
              data-aos-offset="200"
              
              data-aos-delay="100"
            >
              I Am A {text}
            </h1>
            <p
              className="text-sm font-monts"
              data-aos="fade-up"
              data-aos-offset="200"
              
              data-aos-delay="150"
            >
              I'm an enthusiastic young guy, with 2 years of experience who
              loves Web Design & Development. I do my best and constantly try to
              be autodidact, learning new things and always looking for options
              of progress or work from anywhere.
            </p>
          </div>

          <div
            className="flex py-3 "
            data-aos="fade-in"
            data-aos-offset="200"
            
            data-aos-delay="150"
          >
            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <AiFillGithub size={20} color="#89715b" />
            </div>

            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <AiFillLinkedin size={20} color="#89715b" />
            </div>
            <div className="hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-9 h-9 p-2 mx-1">
              <MdEmail size={20} color="#89715b" />
            </div>
          </div>
        </div>

        <div className="relative" 
        
          
            data-aos="zoom-out"
            data-aos-offset="200"
            
            data-aos-delay="300"
        >
          <div className=" w-60 h-60 md:w-64 md:h-68 left-0 right-0 absolute rounded-full bg-[#3e4491] mx-auto"></div>

          <div className="relative p-10 max-w-full  md:w-[500px]">
            <img src="/heroo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
