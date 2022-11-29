const express = require("express");
const router = express.Router();
const {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

router.route("/").get(getPatients).post(setPatient);

router.route("/:id").delete(deletePatient).put(updatePatient);

module.exports = router;
