const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMyData,
} = require("../controllers/userController.js");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMyData);

module.exports = router;
