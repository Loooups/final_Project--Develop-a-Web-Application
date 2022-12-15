const express = require("express");
const router = express.Router();

const {
  getUsers,
  registerUser,
  loginUser,
  getMyData,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getUsers).post(protect, registerUser);
router.post("/login", loginUser);
router.get("/:id", protect, getMyData);

module.exports = router;
