const Query = require("../mysql/index");

const authRegister = async (req, res, next) => {
  const { username, lastName, firstName, password } = req.body;
  const validUserName_q = `SELECT username FROM users WHERE username = ?`;
  if (!lastName) {
    return res.status(400).send({message: "Last name is require"});
  }
  if (!firstName) {
    return res.status(400).send({message: "First name is require"});
  }
  if (!password) {
    return res.status(400).send({message: "Password is require"});
  }
  if (!username) {
    return res.status(400).send({message: "Username is require"});
  }
  const user = await Query(validUserName_q, username);
  if (user.length) {
    return res.status(409).send({message: "Username already exist"});
  }
  next();
};

module.exports = authRegister;
