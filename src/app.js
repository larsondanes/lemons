import bodyParser from "body-parser";
import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;

app.use(bodyParser.json());

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

let conn, db;
try {
  conn = await client.connect();
  db = conn.db("lemons");
} catch(e) {
  console.error(e);
}

app.post("/items", (req, res) => {
  console.log(req.body);
  const item = req.body;
  db.collection("items").insertOne(item);
  //res.set("content-type", "application/json")
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})