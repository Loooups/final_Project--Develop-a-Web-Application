const express = require("express");
const router = express.Router();
const {
  getStudies,
  setStudy,
  updateStudy,
  deleteStudy,
} = require("../controllers/studiesController.js");

router.route("/").get(getStudies).post(setStudy);

router.route("/:id").delete(deleteStudy).put(updateStudy);

module.exports = router;
