import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import "./discover.css";
import "./browse.css";
import "./cart.css";
import "./gameview.css";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";
import Discover from "./routes/Discover";
import Browse from "./routes/Browse";
import Cart from "./routes/Cart";
import GameView from "./routes/GameView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/game/:id",
        element: <GameView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
