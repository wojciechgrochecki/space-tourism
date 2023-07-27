import Logo from "../assets/shared/Logo.svg";

export default function Navigation({}) {
  return (
    <div
      className="flex flex-row items-center justify-between 
    py-10 pl-14"
    >
      <img src={Logo} alt="website logo" className="" />
      <div className="relative right-[-30px] z-10 hidden h-[1px] flex-1 bg-white/30 lg:block"></div>
      <nav className="">
        <ul
          className="flex flex-row gap-[clamp(1.5rem,5vw,3.5rem)] bg-white/5 px-[clamp(2rem,10vw,10rem)]
         text-400 text-white backdrop-blur-lg
        "
        >
          <li className="border-b-[3px] border-b-white/0 py-8 font-sans-cond uppercase hover:cursor-pointer hover:border-b-white/40">
            <span className="mr-[11px] inline-block font-bold tracking-wider ">
              00
            </span>
            Home
          </li>
          <li className="border-b-[3px] border-b-white/0 py-8 font-sans-cond uppercase hover:cursor-pointer hover:border-b-white/40">
            <span className="mr-[11px] inline-block font-bold tracking-wider">
              01
            </span>
            Destination
          </li>
          <li className="border-b-[3px] border-b-white/0 py-8 font-sans-cond uppercase hover:cursor-pointer hover:border-b-white/40">
            <span className="mr-[11px] inline-block font-bold tracking-wider">
              02
            </span>
            Crew
          </li>
          <li className="border-b-[3px] border-b-white/0 py-8 font-sans-cond uppercase hover:cursor-pointer hover:border-b-white/40">
            <span className="mr-[11px] inline-block font-bold tracking-wider">
              03
            </span>
            Technology
          </li>
        </ul>
      </nav>
    </div>
  );
}
