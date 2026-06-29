const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("APK Builder Backend Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "Server running"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
