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
  // logs body text if available
  if (req.body.text && requestsCount < 6) {
    requestsCount = +1;
    console.log(req.body.text);
  } else if (!req.body.text && requestsCount < 6) {
    // bad request incase no body text
    requestsCount = +1;
    res.status(400).json({
      message: "400: Bad Request"
    });
  } else if (requestsCount >= 6) {
    // more than five requests - 500 internal server error
    res.status(500).json({
      message: "500: Internal server error"
    });
  }
});
app.listen(port, () => `Listening on port ${port}`);
