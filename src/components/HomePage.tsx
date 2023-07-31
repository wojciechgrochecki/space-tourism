import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function HomePage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-home-mobile
    bg-cover bg-[bottom_center] bg-no-repeat md:bg-home-tablet lg:bg-home-desktop"
    >
      <Navigation />
      <div
        className="grid place-items-center  gap-y-8 px-6 
      text-center lg:grid-cols-[minmax(2rem,2fr)_minmax(0,450px)_1fr_minmax(0,450px)_minmax(2rem,2fr)] lg:items-end
      lg:px-0 lg:pb-[max(6rem,20vh)] "
      >
        <div className="max-w-[450px] lg:col-start-2 ">
          <h1 className="my-4 font-sans-cond text-500 uppercase tracking-widest text-light-blue lg:text-left">
            So, you want to travel to{" "}
            <span className="block font-serif text-900 tracking-[0px] text-white md:leading-tight">
              Space
            </span>
          </h1>
          <p className="max-w-[50ch] font-sans text-400 text-light-blue lg:text-left lg:leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="max-w-[450px] lg:col-start-4 ">
          <Link
            to="/destination"
            className="relative z-10 grid aspect-square place-items-center rounded-full bg-white px-8 font-serif text-[20px]
            uppercase tracking-[1.25px] text-dark  after:absolute after:-z-10 
            after:block after:h-full after:w-full after:rounded-full after:bg-white/10 after:opacity-0
            after:transition-all after:duration-700 hover:after:scale-150 hover:after:opacity-100 md:text-[2rem]
            lg:px-16 lg:tracking-[2px]
            "
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
