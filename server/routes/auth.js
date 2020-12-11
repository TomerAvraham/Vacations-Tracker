const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Query = require("../mysql/index");
const bcrypt = require("bcrypt");
const authRegister = require("../middleWares/authRegister");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const username_q = `SELECT * FROM users where username = ?`;
  try {
    const result = await Query(username_q, username);
    const user = result[0];
    if (!user) return res.status(400).send({ message: "User doesn't exist"});
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "24h",
      });
      res.status(200).send({ accessToken, userInfo: user });
    } else {
      res.status(400).send({ message: "Incorrect password " });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/register", authRegister, async (req, res) => {
  const { firstName, lastName, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const addUser_q = `insert into users (firstName, lastName, 
        username, password) values (?, ?, ?, ?)`;
    await Query(addUser_q, firstName, lastName, username, hashedPassword);
    res.status(201).send({ message: "User created successfully, login now" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
