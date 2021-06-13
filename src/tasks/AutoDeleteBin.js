import cron from "node-cron";
import { PasteBinService } from "../services";

cron.schedule("59 23 * * *", async () => {
  console.log(`Expired Content deleted at ${new Date()}`);

  await PasteBinService.deleteExpiredContent();
});
