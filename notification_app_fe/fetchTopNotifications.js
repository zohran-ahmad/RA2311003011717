const fetch = require("node-fetch");
const logger = require("../logging_middleware/logger");

const API_URL = "http://20.207.122.201/evaluation-service/notifications";

const weightMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications(n = 10) {
  try {
    logger.info("Fetching notifications...");

    const res = await fetch(API_URL);
    const data = await res.json();

    const notifications = data.notifications;

    const sorted = notifications.sort((a, b) => {
      const w1 = weightMap[a.Type];
      const w2 = weightMap[b.Type];

      if (w1 !== w2) return w2 - w1;
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const topN = sorted.slice(0, n);

    logger.info("Top notifications computed");

    console.log(topN);

  } catch (err) {
    logger.error("Error:", err);
  }
}

getTopNotifications(10);