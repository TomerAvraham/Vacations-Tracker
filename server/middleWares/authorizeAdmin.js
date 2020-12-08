const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.sendStatue(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json(err);
    }
    if (!decoded.admin) {
      return res.status(403).json("Admin Only");
    }
    req.user = decoded;
    next();
  });
};

module.exports = authorize;
