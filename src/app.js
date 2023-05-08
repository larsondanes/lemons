import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, lemons");
})

app.post("/", (req, res) => {
  res.send("Got a POST request");
})

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user")
})

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user")
})

const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})