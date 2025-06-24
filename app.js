import p5 from "p5";

let p5sketch = (p) => {

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(0);
  }

  p.draw = () => {
    p.background(0);
    p.ellipse(x, 20, 20, 20);
  }
};

let myp5 = new p5(p5sketch);

const express = require("express");

const app = express();

const port = 3000;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
