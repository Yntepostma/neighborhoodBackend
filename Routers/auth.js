const { Router, response } = require("express");
const bcrypt = require("bcrypt");

const User = require("../models").user;

const router = new Router();

router.post("/signup", async (req, res) => {
  const { userName, firstName, lastName, emailAddress, password, phoneNumber } =
    req.body;
  console.log("req body", req.body);
  if (
    !userName ||
    !firstName ||
    !lastName ||
    !emailAddress ||
    !password ||
    phoneNumber
  ) {
    res.status(400).send("please provide valid input");
  } else {
    const newUser = User.create({
      userName,
      firstName,
      lastName,
      emailAddress,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      phoneNumber,
    });
    console.log("newUser", newUser);
  }
});

module.exports = router;
