const express = require("express");
const router = express.Router();
const Person = require("./../models/Person.js");

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
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

    const newPerson = new Person(data);

    const savedPerson = await newPerson.save();

    console.log("Data saved successfully");
    res.status(200).json({ success: "Success", data: newPerson });
  } catch (error) {
    console.log("Data saved error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;

    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const data = await Person.find({
        work: workType,
      });
      console.log(data);
      res.status(200).json({ success: "Success", data: data });
    } else {
      console.log("Data get error", workType);
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log("Data fetch error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if(!response){
        return res.status(404).json({error: "Person not found"});
    }

    console.log(response);
    res.status(200).json({ success: "Updated Successfully", data: response});
  } catch (error) {
    console.log("Data update error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    // const updatePersonData = req.body;

    const response = await Person.findByIdAndDelete(
      personId,
    );

    if(!response){
        return res.status(404).json({error: "Person not found"});
    }

    console.log(response);
    res.status(200).json({ success: "Deleted Successfully", data: response});
  } catch (error) {
    console.log("Data update error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
