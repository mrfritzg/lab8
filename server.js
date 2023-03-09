const express = require("express");

const app = express();

const PORT = 8080;

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send("hello " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tipAmount = (req.params.tipPercentage / 100) * req.params.total;
  res.send(`Your Tip Was $${tipAmount}`);
});

const randomQuotes = require("./models/randomQuotes");

app.get("/magic/:question", (req, res) => {
  res.send(
    "<div><h1>" + req.params.question +
     "</h1><h1>"
     //get the random quote from the array
     + randomQuotes[Math.floor(Math.random() * randomQuotes.length)] +
     "</h1></div>"
  );
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });