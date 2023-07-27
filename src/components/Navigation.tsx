import Logo from "../assets/shared/Logo.svg";
import IconClose from "../assets/shared/icon-close.svg";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export default function Navigation({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between p-6 lg:px-0
    lg:py-10 lg:pl-14"
    >
      <img src={Logo} alt="website logo" className="" />
      <div className="relative right-[-30px] z-10 hidden h-[1px] flex-1 bg-white/30 lg:block"></div>
      <img
        src={isOpen ? IconClose : IconHamburger}
        alt="navigation controls"
        className="z-[9999] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
      <nav className="fixed z-20 lg:static">
        <ul
          className={`fixed right-0 top-0  flex h-full w-[70%] flex-col gap-5 bg-white/5 px-8 py-[min(20rem,15vh)] text-400 text-white backdrop-blur-lg transition-transform 
          duration-500 md:translate-x-[0] lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-[clamp(1.5rem,5vw,3.5rem)] lg:px-[clamp(2rem,10vw,10rem)] lg:py-0 
          ${!isOpen && "translate-x-[100%]"}`}
        >
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 lg:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              00
            </span>
            Home
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 lg:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              01
            </span>
            Destination
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 lg:py-8">
            <span className="mr-[11px] inline-block font-bold md:hidden lg:inline-block">
              02
            </span>
            Crew
          </li>
          <li className="border-b-[3px] border-b-white/0 font-sans-cond uppercase tracking-wider hover:cursor-pointer hover:border-b-white/40 lg:py-8">
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
