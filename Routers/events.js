const { Router } = require("express");
const Neighborhood = require("../models").neighborhood;
const Event = require("../models").event;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  res.send(user);
  const events = Event.findAll({
    where: { neighborhoodId: user.neighborhoodId },
  });
  res.status(200).send(events);
});

module.exports = router;
