import Navigation from "./Navigation";
import LaunchLandscape from "../assets/technology/image-launch-vehicle-landscape-fixed.jpg";

export default function TechnologyPage({}) {
  return (
    <div
      className="grid  min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-technology-mobile
    bg-cover  bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop "
    >
      <Navigation />
      <div
        className="grid content-start justify-items-center md:pt-10 
      lg:grid-cols-[minmax(2rem,2fr)_minmax(0,650px)_minmax(2rem,5rem)_minmax(0,500px)_minmax(2rem,2fr)] "
      >
        <h1 className="px-6 font-sans-cond text-500 uppercase tracking-wider text-white lg:tracking-widest">
          <span className="mr-[18px] inline-block font-bold text-white/30">
            03
          </span>
          Space launch 101
        </h1>
        <img
          src={LaunchLandscape}
          alt="space rocket image"
          className="mt-8 h-auto w-full"
        />
        <div className="mt-8 px-6">
          <ul className="flex flex-row gap-4 text-center font-serif [&_li]:hover:cursor-pointer">
            <li className="flex aspect-square w-10 items-center justify-center rounded-full bg-white text-600 text-dark md:w-[60px] lg:w-20">
              1
            </li>
            <li className="flex aspect-square w-10 items-center justify-center rounded-full border border-white/30 text-600 text-white md:w-[60px] lg:w-20">
              2
            </li>
            <li className="flex aspect-square w-10 items-center justify-center rounded-full border border-white/30 text-600 text-white md:w-[60px] lg:w-20">
              3
            </li>
          </ul>
        </div>
        <div className="mt-6 px-6 text-center">
          <p className="font-sans-cond text-300 uppercase tracking-wide text-light-blue">
            The terminology...
          </p>
          <h2 className="font-serif text-700 uppercase text-white">
            Launch vehicle
          </h2>
          <p
            className="mt-4 max-w-[51ch] pb-8 text-center font-sans text-400 leading-6 text-light-blue
           md:mt-0 md:pb-0 md:leading-7 lg:mt-4 lg:max-w-[45ch]  lg:text-left lg:leading-8"
          >
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  );
}
