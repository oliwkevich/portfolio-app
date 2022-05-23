import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineMenu } from "react-icons/ai";
import { MobHeader } from "./MobHeader";

export const Header = () => {
  const [header, setHeader] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  const [headerBg, setHeaderBg] = React.useState("#ecf0f3");
  const [linkCol, setLinkCol] = React.useState("#1f2973");
  const router = useRouter();

  React.useEffect(() => {
    if (
      router.asPath === "/stackline" ||
      router.asPath === "/disney" ||
      router.asPath === "/weather" ||
      router.asPath === "/pizza" ||
      router.asPath === "/movie"
    ) {
      setHeaderBg("transparent");
      setLinkCol("#ecf0f3");
    } else {
      setHeaderBg("#ecf0f3");
      setLinkCol("#1f2973");
    }
  }, [router]);

  const handleMenuClick = () => {
    setHeader((prev) => !prev);
  };

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${headerBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h1 className="cursor-pointer">olishkevich.</h1>
        </Link>
        <div>
          <ul style={{ color: `${linkCol}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b border-gray-400">
                HOME
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-xl hover:border-b border-gray-400">
                ABOUT
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-xl hover:border-b border-gray-400">
                SKILLS
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-xl hover:border-b border-gray-400">
                PROJECTS
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-xl hover:border-b border-gray-400">
                CONTACT
              </li>
            </Link>
          </ul>
          <div className="md:hidden ">
            <AiOutlineMenu className="text-sky-600" size={25} onClick={handleMenuClick} />
          </div>
        </div>
      </div>
      {header && <MobHeader setHeader={handleMenuClick} />}
    </div>
  );
};
