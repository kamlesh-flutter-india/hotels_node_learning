const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem.js");

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log(data);
    res.status(200).json({ success: "Success", data: data });
  } catch (error) {
    console.log("Data saved error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    const menuItem = new MenuItem(data);
    const savedItem = await menuItem.save();
    console.log("Data saved successfully");
    res.status(200).json({ success: "Success", data: savedItem });
  } catch (error) {
    console.log("Data saved error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    const menuItem = new MenuItem(data);
    const savedItem = await menuItem.save();
    console.log("Data saved successfully");
    res.status(200).json({ success: "Success", data: savedItem });
  } catch (error) {
    console.log("Data saved error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;