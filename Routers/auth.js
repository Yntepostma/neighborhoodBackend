const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const Neighborhood = require("../models").neighborhood;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/signup", async (req, res) => {
  const { userName, firstName, lastName, emailAddress, password } = req.body;
  console.log("req body", req.body);
  if (!userName || !firstName || !lastName || !emailAddress || !password) {
    return res.status(400).send("please provide valid input");
  }
  try {
    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      emailAddress,
      password: bcrypt.hashSync(password, 10),
    });
    console.log("newUser", newUser);

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  const id = req.user.dataValues.id;
  const user = await User.findByPk(id, {
    include: [Neighborhood],
  });
  console.log("user", user);
  res.status(200).send(user);
});

module.exports = router;

module.exports = router;
