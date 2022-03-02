const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/bfhl", (req, response) => {
  console.log(req.body.data);
  req.body.data = req.body.data.replace("/", "");
  var res = {};
  var numbers = [];
  var alphabets = [];
  for (var i = 0; i < req.body.data.length; i++) {
    if (req.body.data[i] >= "0" && req.body.data[i] <= "9") {
      numbers.push(req.body.data[i]);
    } else if (
      (req.body.data[i] >= "a" && req.body.data[i] <= "z") ||
      (req.body.data[i] >= "A" && req.body.data[i] <= "Z")
    ) {
      alphabets.push(req.body.data[i]);
    }
  }

  res["is_success"] = true;
  res["user_id"] = "12345";
  res["email"] = "arman0432.cse19@chitkara.edu.in";
  res["roll_nunmber"] = "1910990452";
  res["numbers"] = numbers;
  res["alphabets"] = alphabets;

  response.send(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
