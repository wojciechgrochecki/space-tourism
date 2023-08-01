import "./App.css";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
