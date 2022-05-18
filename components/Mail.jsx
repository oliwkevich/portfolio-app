import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { SiGmail, SiTelegram } from "react-icons/si";

export const Mail = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600">
            We can build together something really nice :)
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Vlad</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End WEB Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-2xl">
            I'm a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div>
            <div className="flex items-center justify-between max-w-[600px] m-auto py-4 gap-8 mt-12">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiFillGithub size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiGmail size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiFillInstagram size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiFillFacebook size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
