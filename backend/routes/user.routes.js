const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  registerUser,
  loginUser,
  getMyData,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddelware.js");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMyData);

module.exports = router;
