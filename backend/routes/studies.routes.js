const express = require("express");
const router = express.Router();
const {
  getStudies,
  createStudy,
  updateStudy,
  deleteStudy,
} = require("../controllers/studyController");
const { protect } = require("../middleware/authMiddelware");

router.route("/").get(protect, getStudies).post(protect, createStudy);

router.route("/:id").delete(protect, deleteStudy).put(protect, updateStudy);

module.exports = router;
