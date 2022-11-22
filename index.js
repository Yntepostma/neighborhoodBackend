const express = require("express");

const Neighborhood = require("./models").neighborhood;
const Event = require("./models").event;
const Category = require("./models").category;

const app = express();

const PORT = 4000;

app.get("/", async (req, res) => {
  const eventCategories = await Event.findAll({
    include: [Category],
  });
  res.send(eventCategories);
  console.log(eventCategories);
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
