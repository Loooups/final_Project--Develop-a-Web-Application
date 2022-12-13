const express = require("express");
const router = express.Router();
const {
  getLogbooks,
  createLogbook,
  getLogbookByPatient,
} = require("../controllers/logbookController.js");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getLogbooks).post(protect, createLogbook);
router.route("/logbook/:patientName").get(protect, getLogbookByPatient);

module.exports = router;
