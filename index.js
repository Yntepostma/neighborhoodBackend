const express = require("express");
const corsMiddleWare = require("cors");
const PORT = 4000;
const app = express();


const http = require('http').Server(app)

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
  socket.on('message', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

const Event = require("./models").event;
const Category = require("./models").category;
const neighborhoodsRouter = require("./Routers/neighborhoods");
const authRouter = require("./Routers/auth");
const eventRouter = require("./Routers/events");
const marketplaceRouter = require("./Routers/marketplace");


app.use(corsMiddleWare());
app.use(express.json());
app.use("/neighborhoods", neighborhoodsRouter);
app.use("/auth", authRouter);
app.use("/events", eventRouter);
app.use("/marketplace", marketplaceRouter);

app.get("/", async (req, res) => {
  const eventCategories = await Event.findAll({
    include: [Category],
  });
  res.send(eventCategories);
  console.log(eventCategories);
});

http.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
