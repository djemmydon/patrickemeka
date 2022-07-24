import React, { useState } from "react";
import Image from "next/image";
import MyLogo from "./logo mi.png";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Nav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Reviews",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const OpenHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky  py-10 bg-white w-full h-14 flex  items-center px-5">
      <div className="bg-white w-full h-18 flex justify-between  items-center px-5">
      <div className="">
        <Image src={MyLogo} width="100" height="14" />
      </div>


      <div
        onClick={OpenHandler}
        className="text-black font-sans font-semibold text-2xl hover:text-red-600 cursor-pointer "
      >
      {open ?  <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      </div>
     

      <div>


        <div
          className={
            open
              ? " fixed inset-0 text-center w-[300px] h-full z-10 bg-black  ease-out transition-all duration-500 "
              : " duration-500 ease-out transition-all  fixed left-[-100%] "
          }
        >
          <ul className="flex flex-col my-20 ">
            {Nav.map((item, idx) => (
              <Link href={item.link} className=" " key={idx}>
                <a
                  onClick={() => OpenHandler(setOpen(false))}
                  className=" p-4 border-b border-gray-600 font-monts  text-white  font-semibold text-lg hover:text-[#89715b]"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
