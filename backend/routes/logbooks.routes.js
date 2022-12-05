const express = require("express");
const router = express.Router();
const {
  getLogbooks,
  createLogbook,
} = require("../controllers/logbookController.js");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getLogbooks).post(protect, createLogbook);

module.exports = router;
