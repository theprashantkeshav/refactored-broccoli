const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  //? Get Token from Header
  const token = req.header("x-auth-token");

  //? Check if No Token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  //? verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid" });
  }
};
