import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Stat from "./components/Stat";
import Card from "./components/Card";

function App() {
  document.documentElement.style.height = "fill-available";
  document.documentElement.style.backgroundColor = "bg-color-primary";
  // document.body.style.height = "100vh";

  return (
    <div className="App h-screen bg-color-primary-background font-Roboto content-center">
      <div className="flex flex-col justify-center items-center">
        {/* Header */}
        <div className="flex flex-row justify-center items-center gap-28 mt-10">
          {/* Arrow */}
          <div className="text-color-accent cursor-pointer hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-0.5 justify-center items-center">
            <div className="text-color-primary-text text-4xl">Monday</div>
            <div className="text-color-secondary-text text-sm">
              1st September
            </div>
          </div>

          {/* Arrow */}
          <div className="text-color-accent cursor-pointer hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col flex-wrap justify-center items-center gap-20 mt-20 md:flex-row">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="font-black text-6xl text-color-primary-text">
              57
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="text-color-primary-text text-md">
                People in the hangar
              </div>
              {/* Last updated container */}
              <div className="flex flex-row justify-center items-center gap-2 rounded-2xl py-2 px-4 bg-color-secondary-background">
                <div className="w-2 h-2 rounded-full bg-color-success"></div>
                <div className="text-white text-xs font-semibold">
                  Last Updated: 2m ago
                </div>
              </div>
            </div>
          </div>
          <Stat className="md:order-first" content="2h 30m">
            Until peak time
          </Stat>
          <Stat content="103">Expected peak for today</Stat>
        </div>
      </div>

      {/* Graphs */}
      <div className="h-2/5 flex flex-col justify-center items-center gap-5 mt-20 md:flex-row">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
