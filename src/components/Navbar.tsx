import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-controls="navbar"
        className="absolute inline-block md:hidden top-5 left-5 text-white"
        onClick={() => setVisible(!visible)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <span className="sr-only">Open navbar</span>
      </button>
      <nav
        id="navbar"
        aria-label="Navbar"
        className={`fixed inline-block ${
          visible ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 h-screen top-0 left-0 w-64 bg-grey p-8 z-40`}
      >
        <button
          className="md:hidden absolute top-5 left-5 text-white text-xl"
          onClick={() => setVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Logo */}
        <div className="mt-8 mb-14">
          {/* TODO: make this as an svg import */}
          <svg
            viewBox="627.3679 252.3182 132.3521 37.0975"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              style={{
                fill: "rgb(255, 255, 255)",
                fontSize: 22,
                fontWeight: 500,
              }}
              x="627.4"
              y="272.322"
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            >
              HANGAR
            </text>
            <text
              style={{
                fill: "rgb(166, 166, 166)",
                fontSize: 14,
              }}
              x="627.368"
              y="285.915"
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            >
              DASHBOARD
            </text>
            <path
              d="M 734.854 256.174 L 749.722 285.91 L 719.986 285.91 L 734.854 256.174 Z"
              style={{
                fill: "rgb(230, 64, 122)",
              }}
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            />
            <path
              d="M 740.842 286.574 L 709.488 286.574 L 725.165 255.22 L 740.842 286.574 Z M 711.106 285.574 L 739.224 285.574 L 725.165 257.456 L 711.106 285.574 Z"
              style={{
                fill: "none",
              }}
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            />
            <path
              d="M 740.842 286.574 L 709.488 286.574 L 725.165 255.22 L 740.842 286.574 Z M 711.106 285.574 L 739.224 285.574 L 725.165 257.456 L 711.106 285.574 Z"
              style={{
                fill: "none",
              }}
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            />
            <path
              d="M 740.842 286.574 L 709.488 286.574 L 725.165 255.22 L 740.842 286.574 Z M 711.106 285.574 L 739.224 285.574 L 725.165 257.456 L 711.106 285.574 Z"
              style={{
                fill: "none",
              }}
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            />
            <path
              d="M 746.704 259.885 L 759.72 285.916 L 752.709 285.916 L 743.199 266.896 L 746.704 259.885 Z"
              style={{
                fill: "rgb(230, 64, 122)",
              }}
              transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"
            />
          </svg>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 text-light-grey">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
          <NavLink to="/membership">MEMBERSHIP</NavLink>
          <NavLink to="/opening-times">OPENING TIMES</NavLink>
        </div>
      </nav>
      {/* Click catch */}
      <div
        className={`${
          visible ? "inline-block" : "hidden"
        } md:hidden w-screen h-screen absolute t-0 r-0 z-30 bg-black opacity-30`}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
}
