const express = require("express");
const app = express();
const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toLocaleString()}`);
  next(); 
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`Middleware logging example running at http://localhost:${PORT}`);
});
