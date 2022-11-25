const { Router, response } = require("express");
const Neighborhood = require("../models").neighborhood;
const neighborhoods = require("../neighborhood.json");
const router = new Router();

router.get("/:postal", async (req, res) => {
  const { postal } = req.params;
  console.log(postal, "this is the postal ");
  const neighborhood = await Neighborhood.findAll({
    where: { postal: postal },
  });
  if (!neighborhood) {
    res.status(400).send("Postal code does not exist");
  } else {
    res.status(200).send(neighborhood);
  }
});

router.get("/neighborhood/:postal", async (req, res) => {
  const { postal } = req.params;
  const neighborhood = neighborhoods.find((nb) => nb.postal === postal);
  if (!neighborhood) {
    res.status(404).send("This postal code does not match a neighborhood");
    return;
  }
  res.send(neighborhood);
});

module.exports = router;
