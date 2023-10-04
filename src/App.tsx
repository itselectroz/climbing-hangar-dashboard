import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Stat from "./components/Stat";
import Card from "./components/Card";

function App() {
  // TODO: Don't know a better way to do this yet
  document.documentElement.style.height = "fill-available";
  document.documentElement.classList.add("bg-color-primary-background");
  // document.body.style.height = "100vh";

  return (
    <div className="App flex flex-col h-screen bg-color-primary-background font-Roboto content-center md:justify-center md:gap-20">
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
          <div className="flex flex-col gap-0.5 justify-center items-center hidden md:block">
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
            <div className="font-bold text-8xl text-color-primary-text">57</div>
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              <div className="text-color-primary-text font-light text-2xl md:text-lg">
                People in the hangar
              </div>
              {/* Last updated container */}
              <div className="flex flex-row justify-center items-center gap-2 rounded-2xl py-2 px-4 bg-color-secondary-background">
                <div className="w-3 h-3 rounded-full bg-color-success md:w-2 h-2"></div>
                <div className="text-white text-sm font-bold md:text-xs">
                  Last Updated: 2m ago
                </div>
              </div>
            </div>
          </div>
          {/* Stats for mobile */}
          <div className="flex flex-row flex-evenly md:hidden">
            <Stat className="md:order-first" content="2h 30m">
              Until peak time
            </Stat>
            <Stat content="103">Expected peak for today</Stat>
          </div>

          {/* Stats for desktop */}
          <Stat className="hidden md:order-first md:block" content="2h 30m">
            Until peak time
          </Stat>
          <Stat className="hidden md:block" content="103">
            Expected peak for today
          </Stat>
        </div>
      </div>

      {/* Graphs */}
      <div className="flex flex-col justify-center items-center gap-5 mt-20 md:flex-row md:h-1/3 md:justify-evenly md:gap-0">
        <Card></Card>
        <Card className="mb-10 md:mb-0"></Card>
      </div>
    </div>
  );
}

export default App;
