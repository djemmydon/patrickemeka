import React, { useEffect } from "react";
import Header from "./UI/Header";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const experienced = [
  {
    name: "HTML",
    img: "/logo/html.png",
  },
  {
    name: "CSS",
    img: "/logo/css.png",
  },
  {
    name: "SASS",
    img: "/logo/sass.png",
  },
  {
    name: "JAVASCRIPT",
    img: "/logo/javascript.png",
  },
  {
    name: "REACT.JS",
    img: "/logo/react.png",
  },
  {
    name: "NEXT.JS",
    img: "/logo/next.png",
  },
  {
    name: "PHOTOSHOP",
    img: "/logo/ps.png",
  },
];

function About() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="  max-h-full container mx-auto py-5  text-white">
      <Header name="About me " />
      <div className=" gap-0   grid grid-cols-1 lg:grid-cols-2 justify-items-cente r">
     

        {/* Text */}
        <div className=" px-5 md:py-32" >
          <h1 className=" text-4xl font-extrabold font-zilla py-5"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
          >
            Chukwuemeka Patrick
          </h1
          >
          <p className=" text-sm  font-monts"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
          >
            I&apos;m an enthusiastic young guy, with 2 years of experience who loves
            Web Design & Development. I do my best and constantly try to be
            autodidact, learning new things and always looking for options of
            progress or work from anywhere.
          </p>

          <div className="flex  flex-wrap py-5" 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
          >
            {experienced.map((item, idx) => (
              <div
                key={idx}
                className=" hover:scale-110  transition ease-in-out duration-500 rounded-full bg-white w-10 h-10 p-2 mx-3"
              >
                <img src={item.img} className=" w-10 " alt="peculiar logo" />
              </div>
            ))}
          </div>
        </div>
        {/* end text */}

           {/* image */}
           <div className=" w-[300px] md:w-[400px]  group rounded-tl-2xl rounded-br-2xl overflow-hidden ">
          <img
            src="/home.png.png"
            alt="Portfolio Image"
            className="   transition ease-in-out duration-500 w-full "
            data-aos="fade-left"
            data-aos-offset="250"
            data-aos-delay="10"
          />
        </div>
        {/* end image */}
      </div>
    </div>
  );
}

export default About;
