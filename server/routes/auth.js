const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Query = require("../utils/mysql");
const bcrypt = require("bcrypt");
const validateAuth = require("../middleWares/validateAuth");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const username_q = `SELECT * FROM users where username = ?`;
  try {
    const result = await Query(username_q, username);
    if (!result.length) return res.status(400).json("username  Incorrect");
    const user = result[0];
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "24h",
      });
      res.status(200).json({ accessToken });
    } else {
      res.status(400).json("Password Incorrect");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/register", validateAuth, async (req, res) => {
  const { firstName, lastName, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const addUser_q = `insert into users (firstName, lastName, 
        username, password) values (?, ?, ?, ?)`;
    await Query(addUser_q, firstName, lastName, username, hashedPassword);
    res.json("User created successfully, login now");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
