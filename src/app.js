import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, lemons");
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})