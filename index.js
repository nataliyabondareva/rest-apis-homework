const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.redirect("/messages"));
app.get("/messages", (req, res) => res.json({ data: messages }));
let requestsCount = 0;
app.post("/messages", (req, res) => {
  if (req.body.text && requestsCount < 6) {
    requestsCount = +1;
    console.log(req.body.text);
  } else if (!req.body.text && requestsCount < 6) {
    requestsCount = +1;
    res.status(400).json({
      message: "Oh no! 400: Bad Request"
    });
  } else if (requestsCount >= 6) {
    res.status(500).json({
      message: "Whoops! Internal server error"
    });
  }
});
app.listen(port, () => `Listening on port ${port}`);
