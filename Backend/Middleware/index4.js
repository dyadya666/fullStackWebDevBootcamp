import express from "express";
import bodyParser from "body-parser";

var __dirname = import.meta.dirname;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  let form_data = req.body;
  res.send("Hi " + form_data.street + " " + form_data.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
