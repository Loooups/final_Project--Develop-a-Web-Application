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
const createLogbook = asyncHandler(async (req, res) => {
  // Check if logbook patient exists
  const { patientName, date } = req.body;
  const logbookExists = await Logbook.findOne({ patientName, date });
  if (logbookExists) {
    res.status(409);
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

//@desc add logbook
//@route POST /api/logbook
//@access Private

const getLogbookByPatient = asyncHandler(async (req, res) => {
  const logbookToDisplay = await Logbook.find({
    patientName: req.params.patientName,
  });
  if (!logbookToDisplay) {
    res.status(404);
    throw new Error("Logbook not found");
  }
  res.status(200).json(logbookToDisplay);
  // const userRole = req.user.role;
  // // check for user role
  // if (userRole !== "Clinical Trial Manager") {
  //   res.status(401);
  //   throw new Error("User not authorized to delete this study");
});

module.exports = {
  getLogbooks,
  createLogbook,
  getLogbookByPatient,
};
