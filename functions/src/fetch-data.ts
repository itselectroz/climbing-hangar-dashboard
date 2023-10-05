// import { onSchedule } from "firebase-functions/v2/scheduler";
import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { bucket } from "./admin";

const PORTAL_URL =
  "https://portal.rockgympro.com/portal/public/d25534c18619c9ad36ef00175ac5702b/occupancy?&iframeid=occupancyCounter&fId=2101";

// export const fetchData = onSchedule(
//   "every 30 mins from 6:30 to 22:00",
//   async (event) => {
export const fetchData = functions.https.onCall(async (data, context) => {
  try {
    const response = await fetch(new Request(PORTAL_URL));
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const html = await response.text();

    const matches = html.match(
      /\'EXT\'\s*:\s*{[\s\n\r\w\d\'":,]*\'lastUpdate\'\s:\s\'Last updated:\&nbsp([^(]*)/
    );
    if (!matches || !matches[1])
      throw new Error(`RESPONSE error! No matches for last update.`);

    const lastUpdate = matches[1].trim();
    if (lastUpdate !== "now") {
      const timeMatch = lastUpdate.match(/(\d+)\s+mins/);
      if (!timeMatch) return;

      if (Number.parseInt(timeMatch[1]) > 10) return;
    }

    const countMatch = html.match(
      /\'EXT\'\s*:\s*{[\s\n\r\w\d\'":,]*\'count\'\s*:\s*(\d+)/
    );
    if (!countMatch) throw new Error(`RESPONSE error! No matches for count.`);

    const count = Number.parseInt(countMatch[1]);
    if (isNaN(count))
      throw new Error(`PARSE error! Invalid integer count: ${countMatch[1]}`);

    const file = bucket.file("data.json");
    const fileExists = await file.exists();

    if (!fileExists || !fileExists.every((v) => !!v)) {
      file.create({
        data: JSON.stringify({
          entries: [],
        }),
      });
    }


    const entries = [];
    entries.push({
      time: Math.floor(new Date().getTime() / 1000),
      count,
    });

    logger.info(entries);
  } catch (e) {
    logger.error(e);
  }
});
