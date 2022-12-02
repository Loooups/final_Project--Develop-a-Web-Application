const express = require("express");
const router = express.Router();
const {
  getStudies,
  setStudy,
  updateStudy,
  deleteStudy,
} = require("../controllers/studyController");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getStudies).post(protect, setStudy);

router.route("/:id").delete(protect, deleteStudy).put(protect, updateStudy);

module.exports = router;
