const { Router } = require("express");
const Neighborhood = require("../models").neighborhood;
const User = require("../models").user;
const neighborhoods = require("../neighborhood.json");
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.get("/:postal", async (req, res) => {
  const { postal } = req.params;
  console.log(req.params);
  const neighborhood = neighborhoods.find((nb) => nb.postal === postal);
  if (!neighborhood) {
    res.status(404).send("This postal code does not match a neighborhood");
    return;
  }
  res.send(neighborhood);
});

router.post("/", authMiddleware, async (req, res) => {
  const { postal } = req.body;
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id);
  const neighborhood = neighborhoods.find((nb) => nb.postal === postal);
  const neighborhoodToAdd = await Neighborhood.findOne({
    where: { neighborhood: neighborhood.neighborhood },
  });
  try {
    if (!neighborhoodToAdd) {
      const neighborhood = neighborhoods.find((nb) => nb.postal === postal);
      const newNeighborhood = await Neighborhood.create(neighborhood);
      user.update({ neighborhoodId: newNeighborhood.id });
      res.status(200).send(user);
    } else {
      await user.update({
        neighborhoodId: neighborhoodToAdd.id,
      });
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
