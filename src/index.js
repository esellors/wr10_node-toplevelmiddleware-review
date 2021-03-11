const express = require("express");
const app = express();

const { getAll, addOne } = require("../server/msgCtrl");

app.use(express.json());

const hitMessage = (req, res, next) => {
  console.log("Incoming request!");
  next();
};

app.use(hitMessage);

app.get("/api/messages", getAll);
app.post("/api/messages", addOne);

app.listen(5050, () => console.log("Jamming on 5050"));
