const asyncHandler = require("express-async-handler");
const Logbook = require("../models/logbook.model.js");

//@desc Get all logbooks
//@route GET /api/logbooks
//@access Private
const getLogbooks = asyncHandler(async (req, res) => {
  const logbooks = await Logbook.find();

  res.status(200).json(logbooks);
});

//@desc add logbook
//@route POST /api/logbook
//@access Private
const setLogbook = asyncHandler(async (req, res) => {
  // Check if logbook patient exists
  const { patientName, date } = req.body;
  const logbookExists = await Logbook.findOne({ patientName, date });
  if (logbookExists) {
    res.status(400);
    throw new Error("Comments already exists");
  }

  const newLogbook = await Logbook.create({
    patientName: req.body.patientName,
    date: req.body.date,
    comments: req.body.comments,
    studyName: req.body.studyName,
    patientWeight: req.body.patientWeight,
    patientBloodPressure: req.body.patientBloodPressure,
    patientTemperature: req.body.patientTemperature,
  });
  res.status(200).json(newLogbook);
});

module.exports = {
  getLogbooks,
  setLogbook,
};
