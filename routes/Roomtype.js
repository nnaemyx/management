const express = require("express");
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const router = express.Router();
const Roomtype = require("../models/roomtypeModel");

//create room types
router.post("/", asyncHandler(async(req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "Please add a room name." });
    }

    const roomexists = await Roomtype.findOne({ name });
    if (roomexists) {
      res.status(400).json({ message: "Room name already exists." });
    }

    // Create user
    const roomtype = await Roomtype.create({
      name,
    });

    if (roomtype) {
      res.status(201).json({
        name: roomtype.name,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (err) {
    res.status(500).send({ message: "Error" });
  }
}));

// fetch all room types
router.get("/", async (req, res) => {
  try {
    const { name } = req.body;
    if(!name) {
      res.status(400).send({message: "rooms "});
    }
    const roomexists = await Roomtype.find({}).toArray(function (err, res) {
      if (err) throw err;
      console.log("Found the following records");
      console.log(res)
    });
    if(roomexists) {
      res.status(200).send({message: "rooms "});
    }
  } catch (err) {
    res.status(500).send({ message: "fool" });
  }
});

module.exports = router;
