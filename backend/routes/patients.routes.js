const express = require("express");
const router = express.Router();
const {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getPatients).post(protect, setPatient);

router.route("/:id").delete(protect, deletePatient).put(protect, updatePatient);

module.exports = router;
