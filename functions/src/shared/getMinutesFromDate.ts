import { DateTime } from "luxon";

export const getMinutesFromDate = (date: Date): number => {
  const zonedDate = DateTime.fromJSDate(date).setZone("Europe/London");

  return zonedDate.hour * 60 + Math.floor(zonedDate.minute / 30) * 30;;
}
  
