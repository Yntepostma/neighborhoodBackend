const { Router } = require("express");
const Neighborhood = require("../models").neighborhood;
const Event = require("../models").event;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  try {
    const events = await Event.findAll({
      where: { neighborhoodId: user.neighborhoodId },
    });
    console.log("events", events);
    res.status(200).send(events);
  } catch (e) {
    res.status(400).send("request failed");
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const userId = user.id;
  const neighborhoodId = user.neighborhoodId;
  const { title, description, imageUrl, latitude, longtitude, date } = req.body;
  console.log("reqbody", req.body);
  if ((!title, !description, !imageUrl, !latitude, !longtitude, !date)) {
    res.status(400).send("Please provide valid input for all fields");
  } else {
    const newEvent = await Event.create({
      title,
      description,
      imageUrl,
      latitude,
      longtitude,
      userId,
      neighborhoodId,
      date,
    });
    console.log("NewEvent", newEvent);
  }
});

module.exports = router;
