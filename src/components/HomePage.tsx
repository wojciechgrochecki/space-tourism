export default function HomePage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-home-mobile
    bg-cover bg-[bottom_center] bg-no-repeat md:bg-home-tablet desktop:bg-home-desktop"
    >
      <div className="nav h-2">nav here</div>
      <div className="grid place-items-center gap-y-8 px-6 text-center">
        <div className="max-w-[50ch]">
          <h1 className="my-4 text-500 uppercase tracking-widest text-light-blue">
            So, you want to travel to{" "}
            <span className="block font-serif text-900 tracking-[0px] text-white md:leading-tight">
              Space
            </span>
          </h1>
          <p className="text-400 text-light-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="max-w-[50ch]">
          <a
            href="#"
            className="relative z-10 grid aspect-square place-items-center self-start rounded-full bg-white px-8 font-serif
            text-[20px] uppercase tracking-[1.25px]  text-dark after:absolute 
            after:-z-10 after:block after:h-full after:w-full after:rounded-full after:bg-white/10
            after:opacity-0 after:transition-all after:duration-700 hover:after:scale-150 hover:after:opacity-100
            "
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}
