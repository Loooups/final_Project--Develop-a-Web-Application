const asyncHandler = require("express-async-handler");
const Patient = require("../models/patient.model.js");

//@desc Get all patients
//@route GET /api/patients
//@access Private
const getPatients = asyncHandler(async (req, res) => {
  const patient = await Patient.find();
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

  await Patient.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
};
