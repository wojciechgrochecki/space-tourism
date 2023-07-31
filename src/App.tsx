import "./App.css";
import CrewPage from "./components/CrewPage";
import DestinationPage from "./components/DestinationPage";
import HomePage from "./components/HomePage";
import TechnologyPage from "./components/TechnologyPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/crew",
    element: <CrewPage />,
  },
  {
    path: "/destination",
    element: <DestinationPage />,
  },
  {
    path: "/technology",
    element: <TechnologyPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
