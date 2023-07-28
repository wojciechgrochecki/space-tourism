import Navigation from "./Navigation";

export default function CrewPage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-crew-mobile
    bg-cover  bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop "
    >
      <Navigation />
    </div>
  );
}
