function log(level, message, data = "") {
  const time = new Date().toISOString();
  console.log(`[${time}] [${level}] ${message}`, data);
}

module.exports = {
  info: (msg, data) => log("INFO", msg, data),
  error: (msg, data) => log("ERROR", msg, data),
};

