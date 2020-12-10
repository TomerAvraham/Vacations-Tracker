const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.statue(403).send({message: "No token provided!"});
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({message: "Unauthorized"});
    }
    if (!decoded.usr.admin) {
      return res.status(403).send({message: "Admin Only"});
    }
    req.user = decoded;
    next();
  });
};

module.exports = authAdmin;
