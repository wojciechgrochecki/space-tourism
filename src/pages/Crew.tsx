import Navigation from "../components/Navigation";
import data from "../../data.json";
import { useState } from "react";

export default function Crew({}) {
  const [index, setIndex] = useState(0);
  const { crew } = data;

  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-crew-mobile
    bg-cover  bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop "
    >
      <Navigation />
      <div
        className="grid justify-items-center px-6 md:pt-10 
      lg:grid-cols-[minmax(2rem,2fr)_minmax(0,650px)_minmax(2rem,5rem)_minmax(0,500px)_minmax(2rem,2fr)] "
      >
        <h2 className="font-sans-cond text-500 uppercase tracking-wider text-white md:justify-self-start  lg:col-span-2 lg:col-start-2 lg:tracking-widest">
          <span className="mr-[18px] inline-block font-bold text-white/30">
            02
          </span>
          Meet Your Crew
        </h2>
        <img
          src={crew[index].images.png}
          alt={"crew member " + crew[index].name + " photo"}
          className="mt-8 max-w-[60%] border-b border-b-white/30 md:order-3 md:self-end  md:border-b-0  lg:order-none lg:col-span-1 lg:col-start-4 
          lg:row-span-3  lg:mt-0 lg:w-auto lg:max-w-full "
        />
        <div className="md:order-2 lg:col-span-1 lg:col-start-2 lg:justify-self-start">
          <ul className="mt-6 flex flex-row gap-6 md:mt-10 lg:my-6 [&_li]:cursor-pointer">
            {crew.map((member, i) => {
              let style =
                i === index
                  ? "rounded-full  bg-white p-[5px] md:p-2 lg:p-3"
                  : "rounded-full bg-white/20 p-[5px] hover:bg-white/50 md:p-2 lg:p-3";
              return (
                <li
                  key={member.name}
                  className={style}
                  onClick={() => {
                    if (i !== index) setIndex(i);
                  }}
                ></li>
              );
            })}
          </ul>
        </div>
        <div className="mt-6 text-center md:mt-14  lg:col-span-1 lg:col-start-2 lg:justify-self-start lg:text-left">
          <p className="font-serif text-600 uppercase  text-white/50">
            {crew[index].role}
          </p>
          <h1 className="mt-2 font-serif text-700 uppercase text-white md:mt-0 ">
            {crew[index].name}
          </h1>
          <p
            className="mt-4 max-w-[51ch] pb-8 text-center font-sans text-400 leading-6 text-light-blue
           md:mt-0 md:pb-0 md:leading-7 lg:mt-4 lg:max-w-[45ch]  lg:text-left lg:leading-8 "
          >
            {crew[index].bio}
          </p>
        </div>
      </div>
    </div>
  );
}
