const express = require("express");
const corsMiddleWare = require("cors");

const Event = require("./models").event;
const Category = require("./models").category;
const neighborhoodsRouter = require("./Routers/neighborhoods");
const authRouter = require("./Routers/auth");

const app = express();
app.use(corsMiddleWare());
app.use(express.json());
app.use("/neighborhoods", neighborhoodsRouter);
app.use("/auth", authRouter);

const PORT = 4000;

app.get("/", async (req, res) => {
  const eventCategories = await Event.findAll({
    include: [Category],
  });
  res.send(eventCategories);
  console.log(eventCategories);
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
