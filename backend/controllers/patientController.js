const asyncHandler = require("express-async-handler");
const Patient = require("../models/patient.model.js");
const User = require("../models/user.model.js");

//@desc Get all patients
//@route GET /api/patients
//@access Private
const getPatients = asyncHandler(async (req, res) => {
  const patient = await Patient.find({ user: req.user.id });

  res.status(200).json(patient);
});

//@desc add patient
//@route POST /api/patients
//@access Private
const setPatient = asyncHandler(async (req, res) => {
  const newPatient = await Patient.create({
    name: req.body.name,
    birth_date: req.body.birth_date,
    gender: req.body.gender,
    weight: req.body.weight,
    height: req.body.height,
    blood_group: req.body.blood_group,
    study_name: req.body.study_name,
    user: req.user.id,
  });
  res.status(200).json(newPatient);
});

// @desc update patient
// @route PUT /api/patients
// @access Private
const updatePatient = asyncHandler(async (req, res) => {
  const patientToUpdate = await Patient.findById(req.params.id);
  if (!patientToUpdate) {
    res.status(400);
    throw new Error("Patient not found");
  }

  const user = await User.findById(req.user.id);

  //  Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the patient user
  if (patientToUpdate.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not found");
  }

  const updatedPatient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedPatient);
});

// @desc delete patient
// @route DELETE /api/patients
// @access Private
const deletePatient = asyncHandler(async (req, res) => {
  const patientToDelete = await Patient.findById(req.params.id);
  if (!patientToDelete) {
    res.status(400);
    throw new Error("Patient not found");
  }

  const user = await User.findById(req.user.id);

  //  Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the patient user
  if (patientToDelete.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not found");
  }

  await Patient.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
};
