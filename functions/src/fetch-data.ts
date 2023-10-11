import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions";
import { database } from "./admin";

const PORTAL_URL =
  "https://portal.rockgympro.com/portal/public/d25534c18619c9ad36ef00175ac5702b/occupancy?&iframeid=occupancyCounter&fId=2101";

export const fetchData = onSchedule(
  "every 30 mins from 6:30 to 22:00",
  async (event) => {
    try {
      const response = await fetch(new Request(PORTAL_URL));
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const html = await response.text();

      const matches =
        /'EXT'\s*:\s*{[\s\n\r\w\d'":,]*'lastUpdate'\s:\s'Last updated:&nbsp([^(]*)/.exec(
          html
        );

      if (!matches?.at(1))
        throw new Error(`RESPONSE error! No matches for last update.`);

      const lastUpdate = matches[1].trim();
      if (lastUpdate !== "now") {
        const timeMatch = /(\d+)\s+mins/.exec(lastUpdate);
        if (!timeMatch) return;

        if (Number.parseInt(timeMatch[1]) > 10) return;
      }

      const countMatch =
        /'EXT'\s*:\s*{[\s\n\r\w\d'":,]*'count'\s*:\s*(\d+)/.exec(html);

      if (!countMatch) throw new Error(`RESPONSE error! No matches for count.`);

      const count = Number.parseInt(countMatch[1]);
      if (isNaN(count))
        throw new Error(`PARSE error! Invalid integer count: ${countMatch[1]}`);

      const entry = {
        time: Math.floor(new Date().getTime() / 1000),
        count,
      };

      await database.ref("/occupancy").push().set(entry);

      logger.info(`Added new occupancy entry: ${JSON.stringify(entry)}`);
    } catch (e) {
      logger.error(e);
    }
  }
);
