const express = require("express");
const corsMiddleWare = require("cors");
const PORT = 4000;
const app = express();

let users = []

const http = require('http').Server(app)

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    users = users.filter((user) => user.socketID !== socket.id);
    console.log('🔥: A user disconnected');
  });
  socket.on('newUser', (data) => {
    const existingUser = users.find(user=> user.userName === data.userName)
    console.log("data", data, "existing", users)
    if (!existingUser) {
      users.push(data)}
    console.log("users", users)
    socketIO.emit('newUserResponse', users);
  });
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
    console.log("data", data)
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
