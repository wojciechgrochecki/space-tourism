export default function HomePage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-home-mobile
    bg-cover bg-[bottom_center] bg-no-repeat md:bg-home-tablet lg:bg-home-desktop"
    >
      <div className="nav h-2">nav here</div>
      <div
        className="grid place-items-center  gap-y-8 px-6 
      pb-[max(6rem,20vh)] text-center lg:grid-cols-[minmax(2rem,1fr)_repeat(2,minmax(0,450px))_minmax(2rem,1fr)]
      lg:items-end lg:gap-x-5 xl:gap-x-24 "
      >
        <div className="max-w-[450px] lg:col-start-2 ">
          <h1 className="my-4 font-sans-cond text-500 uppercase tracking-widest text-light-blue lg:text-left">
            So, you want to travel to{" "}
            <span className="block font-serif text-900 tracking-[0px] text-white md:leading-tight">
              Space
            </span>
          </h1>
          <p className="max-w-[50ch] font-sans text-400 text-light-blue lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="max-w-[450px] lg:col-start-3 ">
          <a
            href="#"
            className="relative z-10 grid aspect-square place-items-center self-start rounded-full bg-white px-8 font-serif text-[20px]
            uppercase tracking-[1.25px] text-dark  after:absolute after:-z-10 
            after:block after:h-full after:w-full after:rounded-full after:bg-white/10 after:opacity-0
            after:transition-all after:duration-700 hover:after:scale-150 hover:after:opacity-100 md:text-[2rem]
            lg:px-16 lg:tracking-[2px]
            "
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}
