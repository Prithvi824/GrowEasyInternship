import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("You have reached the web app.");
});

app.get("/hello", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
