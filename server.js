const express = require("express");
const app = express();
const db = require("./db.js");
const MenuItem = require("./models/MenuItem.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});




const personRoutes = require('./routes/personRoutes.js');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes.js');
app.use('/menu-item',personRoutes);

app.listen(3000, () => {
  console.log("Running 3000");
});
