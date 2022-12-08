const { Router } = require("express");
const MarketPlace = require("../models").marketPlace;
const Response = require("../models").response;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();
const Category = require("../models").category;
const EventCategory = require("../models").eventCategories;

router.get("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  try {
    const marketplaces = await MarketPlace.findAll({
      where: { neighborhoodId: user.neighborhoodId },
      include: [{ model: Response, include: User }, { model: User }],
    });
    res.status(200).send(marketplaces);
  } catch (e) {
    res.status(400).send("request failed");
  }
});

router.post("/:id/response", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const intId = parseInt(id);
  const { message } = req.body;
  const userId = req.user.dataValues.id;
  const user = await User.findByPk(userId);
  const newResponse = await Response.create({
    userId: userId,
    marketPlaceId: intId,
    response: message,
  });
  console.log(newResponse);
  res.status(200).send("new response created");
});

router.delete("/:marketPlaceId", authMiddleware, async (req, res) => {
  const { marketPlaceId } = req.params;
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const marketPlaceToDelete = await MarketPlace.findOne({
    where: { id: marketPlaceId },
  });
  if (user.id !== marketPlaceToDelete.userId) {
    res.status(400).send("User not authorized to delete item");
  } else {
    await marketPlaceToDelete.destroy();
    res.status(200).send("item deleted");
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const userId = user.id;
  const neighborhoodId = user.neighborhoodId;
  const { title, description, imageUrl, latitude, longtitude, category } =
    req.body;
  if ((!title, !description, !imageUrl, !latitude, !longtitude)) {
    res.status(400).send("Please provide valid input for all fields");
  } else {
    const newMarketPlace = await MarketPlace.create({
      title,
      description,
      imageUrl,
      latitude,
      longtitude,
      userId,
      neighborhoodId,
    });
    // const marketPlaceCategory = await EventCategory.create({
    //   eventId: newEvent.id,
    //   categoryId: category,
    // });
    res.status(200).send("Event created");
  }
});

module.exports = router;
