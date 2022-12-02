const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const User = require("../models/user.model.js");

const protect = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //  Get token from header
      token = req.authorization.split(" ")[1];
      //  Verify token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      //  get user from the token
      (req.user = await User), findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.token.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
