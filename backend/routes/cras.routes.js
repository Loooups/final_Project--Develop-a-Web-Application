const express = require("express");
const router = express.Router();
const {
  getCras,
  setCra,
  updateCra,
  deleteCra,
} = require("../controllers/craController");
const { protect } = require("../middleware/authMiddelware.js");

router.route("/").get(protect, getCras).post(protect, setCra);

router.route("/:id").delete(protect, deleteCra).put(protect, updateCra);

module.exports = router;
