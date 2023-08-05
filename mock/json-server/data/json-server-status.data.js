module.exports = {
  working: true,
  date: new Date(Date.now()).toLocaleString().split(",")[0],
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};
