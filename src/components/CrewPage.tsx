import Navigation from "./Navigation";
import DouglasHurleyImg from "../assets/crew/image-douglas-hurley.png";

export default function CrewPage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-crew-mobile
    bg-cover  bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop "
    >
      <Navigation />
      <div className="grid content-start justify-items-center px-6 md:pt-10 lg:grid-cols-[minmax(2rem,2fr)_minmax(0,500px)_minmax(2rem,5rem)_minmax(0,500px)_minmax(2rem,2fr)] ">
        <h2 className="font-sans-cond text-500 uppercase tracking-wider text-white md:justify-self-start  lg:col-span-2 lg:col-start-2 lg:tracking-widest">
          <span className="mr-[18px] inline-block font-bold text-white/30">
            02
          </span>
          Meet Your Crew
        </h2>
        <img
          src={DouglasHurleyImg}
          alt="moon image"
          className="mt-8 max-w-[60%] border-b border-b-white/30 md:order-3  lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:w-auto  lg:max-w-full lg:self-center"
        />
        <div className="md:order-2 lg:col-span-1 lg:col-start-4 lg:justify-self-start">
          <ul className="mt-6 flex flex-row gap-6 font-sans-cond text-300 uppercase tracking-wide  md:mt-10  lg:tracking-wider [&_li]:cursor-pointer ">
            <li className="rounded-full  bg-white p-[5px] md:p-2"></li>
            <li className="rounded-full bg-white/40 p-[5px] md:p-2"></li>
            <li className="rounded-full bg-white/40 p-[5px] md:p-2"></li>
            <li className="rounded-full bg-white/40 p-[5px] md:p-2"></li>
          </ul>
        </div>
        <div className="mt-6 text-center  md:mt-14 lg:col-span-1 lg:col-start-4 lg:text-left">
          <p className="font-serif text-600 uppercase  text-white/50">
            Commander
          </p>
          <h1 className="mt-2 font-serif text-700 uppercase text-white md:mt-0 ">
            Douglas Hurley
          </h1>
          <p className="mt-4 max-w-[51ch] pb-8 text-center font-sans text-400 leading-6 text-light-blue md:mt-0 md:pb-0 md:leading-7 lg:text-left lg:leading-8 ">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  );
}
