import Link from "next/link";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { MobHeader } from "./MobHeader";

export const Header = () => {
  const [header, setHeader] = React.useState(false);

  const handleMenuClick = () => {
    setHeader((prev) => !prev);
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1>olishkevich.</h1>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">HOME</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">ABOUT</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">SKILLS</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">PROJECTS</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">CONTACT</li>
            </Link>
          </ul>
          <div className="md:hidden ">
            <AiOutlineMenu size={25} onClick={handleMenuClick}/>
          </div>
        </div>
      </div>
      {header && <MobHeader setHeader={handleMenuClick}/>}
    </div>
  );
};
