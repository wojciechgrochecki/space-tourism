import Logo from "../assets/shared/Logo.svg";
import IconClose from "../assets/shared/icon-close.svg";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export default function Navigation({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between p-6 md:px-0
    md:py-0 md:pl-14 lg:py-10"
    >
      <img src={Logo} alt="website logo" className="" />
      <div className="relative right-[-30px] z-30 hidden h-[1px] flex-1 bg-white/30 lg:block"></div>
      <img
        src={isOpen ? IconClose : IconHamburger}
        alt="navigation controls"
        className="z-[9999] cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
      <nav className="fixed z-20 md:static">
        <ul
          className={`fixed right-0 top-0  flex h-full w-[70%] flex-col gap-5 bg-white/5 px-8 py-[min(20rem,15vh)] text-400 text-white backdrop-blur-lg transition-transform duration-500 
          md:static md:h-auto md:w-auto md:translate-x-[0] md:flex-row md:gap-[clamp(1.5rem,5vw,3.5rem)] md:px-[clamp(2rem,10vw,10rem)] md:py-0 md:transition-none 
          ${!isOpen && "translate-x-[100%]"}`}
        >
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 md:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              00
            </span>
            Home
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 md:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              01
            </span>
            Destination
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 md:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              02
            </span>
            Crew
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 md:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block ">
              03
            </span>
            Technology
          </li>
        </ul>
      </nav>
    </div>
  );
}
