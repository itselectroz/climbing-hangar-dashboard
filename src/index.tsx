import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <div className="sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
