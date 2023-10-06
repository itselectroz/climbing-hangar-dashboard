import React from "react";

// Mock data
let cumPeaks: { [key: string]: number } = {
  cumMondayPeak: 1500,
  cumTuesdayPeak: 1578,
  cumWednesdayPeak: 1578,
  cumThursdayPeak: 1578,
  cumFridayPeak: 1578,
  cumSaturdayPeak: 1578,
  cumSundayPeak: 1578,
  countMondayPeak: 17,
  countTuesdayPeak: 17,
  countWednesdayPeak: 17,
  countThursdayPeak: 17,
  countFridayPeak: 17,
  countSaturdayPeak: 17,
  countSundayPeak: 17,
};

const Calc: { [key: string]: number } = {
  avgMondayPeak: Math.round(cumPeaks.cumMondayPeak / cumPeaks.countMondayPeak),
  avgTuesdayPeak: Math.round(
    cumPeaks.cumTuesdayPeak / cumPeaks.countTuesdayPeak
  ),
  avgWednesdayPeak: Math.round(
    cumPeaks.cumWednesdayPeak / cumPeaks.countWednesdayPeak
  ),
  avgThursdayPeak: Math.round(
    cumPeaks.cumThursdayPeak / cumPeaks.countThursdayPeak
  ),
  avgFridayPeak: Math.round(cumPeaks.cumFridayPeak / cumPeaks.countFridayPeak),
  avgSaturdayPeak: Math.round(
    cumPeaks.cumSaturdayPeak / cumPeaks.countSaturdayPeak
  ),
  avgSundayPeak: Math.round(cumPeaks.cumSundayPeak / cumPeaks.countSundayPeak),
};

export default Calc;
