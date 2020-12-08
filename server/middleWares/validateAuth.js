const Query = require("../utils/mysql");

const validateAuth = async (req, res, next) => {
  const { username, lastName, firstName, password } = req.body;
  const validUserName_q = `SELECT userName FROM users WHERE userName = ?`;
  if (!lastName) {
    return res.status(400).json("Last name is require");
  }
  if (!firstName) {
    return res.status(400).json("First name is require");
  }
  if (!password) {
    return res.status(400).json("Password is require");
  }
  if (!username) {
    return res.status(400).json("Username is require");
  }
  const user = await Query(validUserName_q, username);
  if (user.length) {
    return res.status(409).json("Username already exist");
  }
  next();
};

module.exports = validateAuth;
