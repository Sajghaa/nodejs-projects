const express = require("express");
const app = express();
const PORT = 3000;

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.send(`Search query -> Name: ${name}, Age: ${age}`);
});

app.listen(PORT, () => {
  console.log(`URL params & query example running at http://localhost:${PORT}`);
});
