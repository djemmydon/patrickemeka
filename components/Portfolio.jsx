import React, { useEffect, useState } from "react";
import Header from "./UI/Header";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";




const project = [
  {
    id: 1,
    img: "/project/pro3.png",
    name: "Kinox Original Website",
    type: "website",
    link: "/",
  },
  {
    id: 2,
    img: "/project/pro3.png",
    name: "Myrage Crypto Tracking Website",
    type: "website",
    link: "/",
  },
  {
    id: 3,
    img: "/project/PROJECT3.jpg",
    name: "Netflix Clone Website",
    type: "website",
    link: "/",
  },
  {
    id: 4,
    img: "/project/horpsy.jpg",
    name: "Horpsy Anticipate Flier",
    type: "design",
    link: "/",
  },
  {
    id: 5,
    img: "/project/TEEDEX.jpg",
    name: "Dj Teedex Poster",
    type: "design",
    link: "/",
  },
  {
    id: 6,
    img: "/project/Y2KA.jpg",
    name: "Y2kay Music Banner",
    type: "design",
    link: "/",
  },
];

function Portfolio() {


  useEffect(() => {
    AOS.init();
  }, []);
  const [index, setIndex] = useState(1);

  const onToggle = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div>
      <Header name="My Portfolio" />

      <div className="text-white" 
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="150"
      
      >
        <ul className="flex justify-center gap-10 p-2">
          <li
            onClick={() => onToggle(1)}
            className={
              index === 1
                ? " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 bg-white text-black "
                : " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 active:bg-white "
            }
          >
            All
          </li>
          <li
            onClick={() => onToggle(2)}
            className={
              index === 2
                ? " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 bg-white text-black "
                : " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 active:bg-white "
            }
          >
            Design
          </li>
          <li
            onClick={() => onToggle(3)}
            className={
              index === 3
                ? " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 bg-white text-black "
                : " font-monts border-2 w-20 text-center rounded-lg hover:bg-white hover:text-black cursor-pointer transition ease-in-out duration-400 active:bg-white "
            }
          >
            Website
          </li>
        </ul>
      </div>

      <div className={index === 1 ? "  flex justify-center flex-wrap  gap-3 py-5 justify-items-center" : "hidden"}      data-aos="fade-out"
          data-aos-offset="200"
          data-aos-delay="150">
        {project.map((item) => (
          <div
            key={item.id}
            className="w-[300px] h-52 block group relative"
              
          >
            <div className="w-[300px]   h-52">
              <img
                src={item.img}
                alt=""
                className="w-full  h-full object-cover"
              />
            </div>

            <div className="absolute flex flex-col items-center justify-center text-center text-white top-0 left-0 transition ease-in-out duration-500 cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-[#3e4491c7] w-full h-full">
              <h2 className="group-hover:opacity-100 text-1xl font-bold uppercase font-monts ">
                {item.name}
              </h2>
              <Link href={item.link}>
                <a>Link</a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={index === 2 ? "  flex justify-center flex-wrap  gap-3 py-5 justify-items-center" : "hidden"}>
        {project
          .filter((item) => item.type === "design")
          .map((item) => (
            <div
            key={item.id}
            className={
              index === 2
                ? "w-[300px] h-52 block group relative"
                : " w-full  sm:w-[300px]   h-52 hidden"
            }
          >
            <div className="w-[300px]   h-52">
              <img
                src={item.img}
                alt=""
                className="w-full  h-full object-cover"
              />
            </div>

              <div className="absolute flex flex-col items-center justify-center text-center text-white top-0 left-0 transition ease-in-out duration-500 cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-[#3e4491c7] w-full h-full">
                <h2 className="group-hover:opacity-100 text-1xl font-bold uppercase font-monts ">
                  {item.name}
                </h2>
                <Link href={item.link}>
                  <a>Link</a>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className={index === 3 ? " flex justify-center flex-wrap  gap-3 py-5 justify-items-center" : "hidden"}
     
      >
        {project
          .filter((item) => item.type === "website")
          .map((item) => (
            <div
            key={item.id}
            className={
              index === 3
                ? "w-[300px] h-52 block group relative"
                : " w-full  sm:w-[300px]   h-52 hidden"
            }
          >
            <div className="w-[300px] md:w-[300px]   h-52">
              <img
                src={item.img}
                alt=""
                className="w-full  h-full object-cover"
              />
            </div>
              <div className="absolute flex flex-col items-center justify-center text-center text-white top-0 left-0 transition ease-in-out duration-500 cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-[#3e4491c7] w-full h-full">
                <h2 className="group-hover:opacity-100 text-1xl font-bold uppercase font-monts ">
                  {item.name}
                </h2>
                <Link href={item.link}>
                  <a>Link</a>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* <div className="grid grid-cols-3">
        {project.map((item) => (
            <div key={item.id} className="w-[350px] h-52">
                <img src={item.img} alt="" className="w-full  h-full object-cover" />
                
            </div>
        ))}
      </div> */}
    </div>
  );
}

export default Portfolio;
