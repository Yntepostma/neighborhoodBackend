const express = require("express");
const { Server } = require("socket.io");
const corsMiddleWare = require("cors");
const PORT = 4000;

const Event = require("./models").event;
const Category = require("./models").category;
const neighborhoodsRouter = require("./Routers/neighborhoods");
const authRouter = require("./Routers/auth");
const eventRouter = require("./Routers/events");
const marketplaceRouter = require("./Routers/marketplace");
const app = express();

app.use(corsMiddleWare());
app.use(express.json());
app.use("/neighborhoods", neighborhoodsRouter);
app.use("/auth", authRouter);
app.use("/events", eventRouter);
app.use("/marketplace", marketplaceRouter);

const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
let messages = [];

io.on("connection", (socket) => {
  socket.on("getPreviousMessages", () => {
    socket.emit("receivePreviousMessages", messages);
  });

  socket.on("sendMessage", (name, message) => {
    messages.push({ name, message });
    io.emit("receiveMessage", name, message);
  });
});

app.get("/", async (req, res) => {
  const eventCategories = await Event.findAll({
    include: [Category],
  });
  res.send(eventCategories);
  console.log(eventCategories);
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
