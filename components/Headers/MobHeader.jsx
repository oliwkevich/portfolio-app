import React from "react";
import Link from "next/link";

import {
    AiOutlineClose,
    AiFillGithub,
    AiFillInstagram,
    AiFillFacebook,
  } from "react-icons/ai";
  import { SiGmail, SiTelegram } from "react-icons/si";

export const MobHeader = ({setHeader}) => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <h1>olishkevich.</h1>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose onClick={setHeader}/>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                You waste time, you lose everything.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li onClick={() => setHeader(false)} className="py-4 text-sm">HOME</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setHeader(false)} className="py-4 text-sm">ABOUT</li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setHeader(false)} className="py-4 text-sm">SKILLS</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setHeader(false)} className="py-4 text-sm">PROJECTS</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setHeader(false)} className="py-4 text-sm">CONTACT</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-wide text-[#5651e5]">
                my contacts:
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillGithub size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiGmail size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillInstagram size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillFacebook size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiTelegram size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
