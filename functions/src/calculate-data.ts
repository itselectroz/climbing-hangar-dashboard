import * as functions from "firebase-functions";
import { database, firestore } from "./admin";
import { logger } from "firebase-functions";
import { getMinutesFromDate } from "./shared/getMinutesFromDate";

type DayAverage = {
  [time: number]: {
    cumCount: number;
    entries: number;
  };
};

export const calculateData = functions.pubsub
  .topic("calculate-data")
  .onPublish(async () => {
    const entries = await database.ref("/occupancy").orderByChild("time").get();

    let currentDay = -1;

    const averages: {
      [day: number]: DayAverage;
    } = {};
    let currentCounts: {
      [time: number]: number;
    } = {};

    entries.forEach((child) => {
      const { time, count } = child.val();

      const date = new Date(time * 1000);
      const day = date.getDay();

      if (currentDay === -1) currentDay = day;

      // When we move to next day
      if (day !== currentDay) {
        // Store stats into all time averages
        if (!averages[day]) averages[day] = {};

        const currentAverages = averages[day];

        // For every time entry
        for (const time in currentCounts) {
          const currentValue = currentCounts[time];

          // Set default if not set
          if (!currentAverages[time]) {
            currentAverages[time] = {
              cumCount: 0,
              entries: 0,
            };
          }
          const averageValue = currentAverages[time];

          // Add values on
          averageValue.cumCount += currentValue;
          averageValue.entries++;
        }

        currentDay = day;
        currentCounts = {};
      }

      const entry = getMinutesFromDate(date);

      // Store entry count into map
      currentCounts[entry] = count;
    });

    const batch = firestore.batch();
    const rootDir = firestore.collection("/averages");

    for (const day in averages) {
      batch.set(rootDir.doc(day), averages[day]);
    }

    await batch.commit();

    logger.info("Successfully calculated averages");
  });
