const express = require("express");
const router = express.Router();
const {
  getCras,
  setCra,
  updateCra,
  deleteCra,
} = require("../controllers/craController");

router.route("/").get(getCras).post(setCra);

router.route("/:id").delete(deleteCra).put(updateCra);

module.exports = router;
