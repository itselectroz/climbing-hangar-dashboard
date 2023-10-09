import Stat from "../components/Stat";
import Card from "../components/Card";
import Calc from "../components/Calc";

// Key for peak people for specific day
let dayPeak: { [key: number]: string } = {
  0: "avgSundayPeak",
  1: "avgMondayPeak",
  2: "avgTuesdayPeak",
  3: "avgWednesdayPeak",
  4: "avgThursdayPeak",
  5: "avgFridayPeak",
  6: "avgSaturdayPeak",
};

// Key for peak time for specific day
let dayPeakTime: { [key: number]: string } = {
  0: "avgSundayPeakTime",
  1: "avgMondayPeakTime",
  2: "avgTuesdayPeakTime",
  3: "avgWednesdayPeakTime",
  4: "avgThursdayPeakTime",
  5: "avgFridayPeakTime",
  6: "avgSaturdayPeakTime",
};

function Home() {
  // Get current day
  let currentDay = new Date().getDay();

  return (
    <div className="h-screen bg-dark-grey font-Roboto content-center text-center md:justify-center md:gap-20">
      <div className="flex flex-col justify-center items-center md:gap-12">
        {/* Header */}
        <div className="flex flex-row justify-center items-center gap-28 mt-10">
          {/* Arrow */}
          <div className="text-pink cursor-pointer hidden md:block">
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
            <div className="text-white text-5xl">Monday</div>
            <div className="text-light-grey text-lg">1st September</div>
          </div>

          {/* Arrow */}
          <div className="text-pink cursor-pointer hidden md:block">
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
        <div className="flex flex-row flex-wrap justify-evenly items-center gap-y-20 md:mt-20 md:gap-0 md:justify-evenly md:w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-full md:w-auto">
            <div className="font-bold text-7xl text-white md:text-8xl">57</div>
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              <div className="text-white font-light text-2xl md:text-lg">
                People in the hangar
              </div>
              {/* Last updated container */}
              <div className="flex flex-row justify-center items-center gap-2 rounded-2xl py-2 px-4 bg-grey">
                <div className="w-3 h-3 rounded-full bg-green animate-pulse md:w-2 md:h-2"></div>
                <div className="text-white text-sm font-bold md:text-xs">
                  Last Updated: 2m ago
                </div>
              </div>
            </div>
          </div>
          {/* Stat Components */}
          <Stat
            className="md:order-first"
            content={Calc[dayPeakTime[currentDay]].toString()}
          >
            Expected peak time
          </Stat>
          <Stat content={Calc[dayPeak[currentDay]].toString()}>
            Expected peak persons
          </Stat>
        </div>
      </div>

      {/* Graphs */}
      <div className="flex flex-col justify-center items-center gap-5 mt-20 md:mt-0 md:mt-36 md:flex-row md:h-1/3 md:justify-evenly md:gap-0">
        <Card></Card>
        <Card className="mb-10 md:mb-0"></Card>
      </div>
    </div>
  );
}

export default Home;
