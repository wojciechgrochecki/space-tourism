import Navigation from "./Navigation";
import LaunchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";

export default function TechnologyPage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-technology-mobile
    bg-cover  bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop "
    >
      <Navigation />
      <div
        className="grid justify-items-center px-6 md:pt-10 
      lg:grid-cols-[minmax(2rem,2fr)_minmax(0,650px)_minmax(2rem,5rem)_minmax(0,500px)_minmax(2rem,2fr)] "
      >
        <img
          src={LaunchPortrait}
          alt="moon image"
          className="mt-8 max-w-[60%] border-b border-b-white/30 md:order-3 md:self-end  md:border-b-0  lg:order-none lg:col-span-1 lg:col-start-4 
          lg:row-span-3  lg:mt-0 lg:w-auto lg:max-w-full "
        />
      </div>
    </div>
  );
}
