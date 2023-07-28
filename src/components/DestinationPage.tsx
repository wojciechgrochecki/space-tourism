import Navigation from "./Navigation";
import MoonImg from "../assets/destination/image-moon.png";

export default function DestinationPage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-destination-mobile
    bg-cover  bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop "
    >
      <Navigation />
      <div className="grid content-start justify-items-center px-6 md:pt-6 lg:grid-cols-[minmax(2rem,2fr)_minmax(0,500px)_minmax(2rem,5rem)_minmax(0,500px)_minmax(2rem,2fr)] ">
        <h2 className="font-sans-cond text-500 uppercase tracking-wider text-white md:justify-self-start  lg:col-span-2 lg:col-start-2 lg:tracking-widest">
          <span className="mr-[18px] inline-block font-bold text-white/30">
            01
          </span>
          Pick Your Destination
        </h2>
        <img
          src={MoonImg}
          alt="moon image"
          className="mt-8 max-w-[60%] md:w-[60%] md:max-w-[400px] lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:w-auto  lg:max-w-full lg:self-center"
        />
        <div className="lg:col-span-1 lg:col-start-4 lg:justify-self-start">
          <ul className="mt-6 flex cursor-pointer flex-row gap-6 font-sans-cond text-300 uppercase tracking-wide  md:mt-10 lg:tracking-wider ">
            <li className="border-b-[3px] border-b-white  pb-2  text-white">
              Moon
            </li>
            <li className="border-b-[3px] border-b-white/40 pb-2 text-light-blue">
              Mars
            </li>
            <li className="border-b-[3px] border-b-white/0 pb-2 text-light-blue">
              Europa
            </li>
            <li className="border-b-[3px] border-b-white/0 pb-2 text-light-blue">
              Titan
            </li>
          </ul>
        </div>
        <div className="text-center lg:col-span-1 lg:col-start-4 lg:text-left">
          <h1 className="mt-5 font-serif text-800 uppercase text-white md:mt-6">
            Moon
          </h1>
          <p className="max-w-[62ch] text-center font-sans text-400 leading-6 text-light-blue md:leading-7 lg:text-left lg:leading-8 ">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="mt-8 w-full space-y-8 border-t border-t-white/30 py-8  md:mt-14 md:flex md:flex-row md:justify-evenly md:space-y-0 lg:justify-start lg:gap-[min(8vw,10rem)]">
            <div>
              <h3 className="font-sans-cond text-200 uppercase tracking-wide text-light-blue ">
                Avg. distance
              </h3>
              <p className="font-serif text-[1.75rem] uppercase text-white">
                384,400 km
              </p>
            </div>
            <div>
              <h3 className="font-sans-cond text-200 uppercase tracking-wide text-light-blue">
                est. travel time
              </h3>
              <p className="font-serif text-[1.75rem] uppercase text-white">
                3 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
