// MOCK DATA:

let cumPeaks: { [key: string]: number } = {
  cumMondayPeak: 1578,
  cumTuesdayPeak: 1545,
  cumWednesdayPeak: 1489,
  cumThursdayPeak: 1356,
  cumFridayPeak: 1601,
  cumSaturdayPeak: 1522,
  cumSundayPeak: 1468,
  countMondayPeak: 17,
  countTuesdayPeak: 17,
  countWednesdayPeak: 17,
  countThursdayPeak: 17,
  countFridayPeak: 17,
  countSaturdayPeak: 17,
  countSundayPeak: 17,
};

let mockMondayPeakTimes = [
  1693656000000, 1694246400000, 1694876400000, 1695474000000, 1696084200000,
];

let cumPeakTimes: { [key: string]: number } = {
  cumMondayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumTuesdayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumWednesdayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumThursdayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumFridayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumSaturdayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  cumSundayPeakTime:
    mockMondayPeakTimes[0] +
    mockMondayPeakTimes[1] +
    mockMondayPeakTimes[2] +
    mockMondayPeakTimes[3] +
    mockMondayPeakTimes[4],
  countMondayPeakTime: 4,
  countTuesdayPeakTime: 4,
  countWednesdayPeakTime: 4,
  countThursdayPeakTime: 4,
  countFridayPeakTime: 4,
  countSaturdayPeakTime: 4,
  countSundayPeakTime: 4,
};

/**
 * Calculates the mean peak amnount of people for this day
 * @param cumDayPeak cumulative sum of the peak amount of people for this day
 * @param countDayPeak count of entries for the peak amount of people for this day
 * @returns mean peak amount of people
 */
function findDayPeak(cumDayPeak: number, countDayPeak: number): string {
  return Math.round(
    cumPeaks.cumMondayPeak / cumPeaks.countMondayPeak
  ).toString();
}

/**
 * Calculates the mean peak time for this day
 * @param cumDayPeakTime cumulative sum of the peak times for this day
 * @param countDayPeakTime count of entries for the peak times for this day
 * @returns mean peak time
 */
function findDayPeakTime(
  cumDayPeakTime: number,
  countDayPeakTime: number
): string {
  return (
    ("0" + new Date(cumDayPeakTime / countDayPeakTime).getHours()).slice(-2) +
    ":" +
    ("0" + new Date(cumDayPeakTime / countDayPeakTime).getMinutes()).slice(-2)
  );
}

// Export calculated values
const Calc: { [key: string]: string } = {
  // Avergae peak amount of people by day
  avgMondayPeak: findDayPeak(
    cumPeaks.cumMondayPeak,
    cumPeakTimes.countMondayPeak
  ),

  avgTuesdayPeak: findDayPeak(
    cumPeaks.cumTuesdayPeak,
    cumPeakTimes.countTuesdayPeak
  ),

  avgWednesdayPeak: findDayPeak(
    cumPeaks.cumWednesdayPeak,
    cumPeakTimes.countWednesdayPeak
  ),

  avgThursdayPeak: findDayPeak(
    cumPeaks.cumThursdayPeak,
    cumPeakTimes.countThursdayPeak
  ),

  avgFridayPeak: findDayPeak(
    cumPeaks.cumFridayPeak,
    cumPeakTimes.countFridayPeak
  ),

  avgSaturdayPeak: findDayPeak(
    cumPeaks.cumSaturdayPeak,
    cumPeakTimes.countSaturdayPeak
  ),

  avgSundayPeak: findDayPeak(
    cumPeaks.cumSundayPeak,
    cumPeakTimes.countSundayPeak
  ),

  // Average peak busiest time by day
  avgMondayPeakTime: findDayPeakTime(
    cumPeakTimes.cumMondayPeakTime,
    cumPeakTimes.countMondayPeakTime
  ),

  avgTuesdayPeakTime: findDayPeakTime(
    cumPeakTimes.cumTuesdayPeakTime,
    cumPeakTimes.countTuesdayPeakTime
  ),

  avgWednesdayPeakTime: findDayPeakTime(
    cumPeakTimes.cumWednesdayPeakTime,
    cumPeakTimes.countWednesdayPeakTime
  ),

  avgThursdayPeakTime: findDayPeakTime(
    cumPeakTimes.cumThursdayPeakTime,
    cumPeakTimes.countThursdayPeakTime
  ),

  avgFridayPeakTime: findDayPeakTime(
    cumPeakTimes.cumFridayPeakTime,
    cumPeakTimes.countFridayPeakTime
  ),

  avgSaturdayPeakTime: findDayPeakTime(
    cumPeakTimes.cumSaturdayPeakTime,
    cumPeakTimes.countWednesdayPeakTime
  ),

  avgSundayPeakTime: findDayPeakTime(
    cumPeakTimes.cumSundayPeakTime,
    cumPeakTimes.countSundayPeakTime
  ),
};

export default Calc;
