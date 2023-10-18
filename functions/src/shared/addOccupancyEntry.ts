import { database, firestore } from "../admin";
import { getMinutesFromDate } from "./getMinutesFromDate";

export const addOccupancyEntry = async (entry: {
  time: number;
  count: number;
}) => {
  // Add it to realtime database
  await database.ref("/occupancy").push().set(entry);

  const { time, count } = entry;

  // Get date
  const date = new Date(time * 1000);
  const day = date.getDay();
  const minutes = getMinutesFromDate(date);

  // Get firestore day
  const ref = firestore.doc(`/averages/${day}`);
  const dayEntry = (await ref.get()).data();

  if (!dayEntry) return;

  const timeEntry: {
    cumCount: number;
    entries: number;
  } = dayEntry[minutes];

  // Increment values
  timeEntry.cumCount += count;
  timeEntry.entries++;

  // Update firestore
  await ref.update(dayEntry);
};
