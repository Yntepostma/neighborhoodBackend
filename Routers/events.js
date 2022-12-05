const { Router } = require("express");
const Neighborhood = require("../models").neighborhood;
const Event = require("../models").event;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const response = require("../models/response");
const router = new Router();
const Category = require("../models").category;
const EventCategory = require("../models").eventCategories;
const Attendees = require("../models").attendees;

router.get("/", authMiddleware, async (req, res) => {
  const id = req.user.id;
  const user = await User.findByPk(id);
  try {
    const events = await Event.findAll({
      where: { neighborhoodId: user.neighborhoodId },
      include: [
        {
          model: User,
          as: "attendee",
          attributes: ["userName", "profilePicture"],
          through: { attributes: [] },
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: Category,
        },
      ],
    });
    res.status(200).send(events);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("request failed");
  }
});

router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("userId", userId);
  const user = await User.findOne({
    where: { id: userId },
  });
  res.send(user);
});

router.get("/categories", async (req, res) => {
  const categories = await Category.findAll({});
  res.send(categories);
});

router.delete("/:eventId", authMiddleware, async (req, res) => {
  const { eventId } = req.params;
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const eventToDelete = await Event.findOne({
    where: { id: eventId },
  });
  if (user.id !== eventToDelete.userId) {
    res.status(400).send("User not authorized to delete event");
  } else {
    await eventToDelete.destroy();
    res.status(200).send("event deleted");
  }
});

router.post("/:eventId", authMiddleware, async (req, res) => {
  const { eventId } = req.params;
  console.log("eventId", eventId);
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const event = await Event.findOne({
    where: { id: eventId },
  });
  const addAttendee = await Attendees.findOrCreate({
    where: { userId: user.id, eventId: event.id },
  });
  res.send("attendee added");
});

router.post("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const userId = user.id;
  const neighborhoodId = user.neighborhoodId;
  const { title, description, imageUrl, latitude, longtitude, date, category } =
    req.body;
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
    const eventCategory = await EventCategory.create({
      eventId: newEvent.id,
      categoryId: category,
    });
    res.status(200).send("Event created");
  }
});

module.exports = router;
