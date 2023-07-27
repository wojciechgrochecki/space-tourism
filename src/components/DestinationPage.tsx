import Navigation from "./Navigation";

export default function DestinationPage({}) {
  return (
    <div
      className="grid min-h-screen grid-rows-[min-content_1fr] overflow-x-hidden bg-dark bg-destination-mobile
    bg-cover  bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop"
    >
      <Navigation />
      <div className="content"></div>
    </div>
  );
}
