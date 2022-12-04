const express = require("express");
const router = express.Router();
const {
  getLogbooks,
  setLogbook,
} = require("../controllers/logbookController.js");

router.route("/").get(getLogbooks).post(setLogbook);

module.exports = router;
