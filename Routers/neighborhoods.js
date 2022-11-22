const { Router, response } = require("express");
const Neighborhood = require("../models").neighborhood;

const router = new Router();

router.get("/:postal", async (req, res) => {
  const { postal } = req.params;
  console.log(typeof postal);
  const neighborhood = await Neighborhood.findOne({
    where: { postal: postal },
  });
  console.log(neighborhood);
  res.send(neighborhood);
});

module.exports = router;
