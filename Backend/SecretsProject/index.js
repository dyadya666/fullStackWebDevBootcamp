//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

const __dirname = import.meta.dirname;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var userAuthorised = false;

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    userAuthorised = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
