const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db.js");
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes.js");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes.js");
app.use("/menu-item", menuRoutes);

app.listen(PORT, () => {
  console.log(`Running ${PORT}`);
});
