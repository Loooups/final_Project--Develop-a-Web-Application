const express = require("express");
const router = express.Router();
const {
  getPhysicians,
  setPhysician,
  updatePhysician,
  deletePhysician,
} = require("../controllers/physiciansController.js");

router.route("/").get(getPhysicians).post(setPhysician);

router.route("/:id").delete(deletePhysician).put(updatePhysician);

module.exports = router;
