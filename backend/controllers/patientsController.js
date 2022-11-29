const studies = { idStudy: "098cvb456", studyDateStart: "12/04/2021" };

//@desc Get all patients
//@route GET /api/patients
//@access Private
const getPatients = (req, res) => {
  res.status(200).json(studies);
};

//@desc add patient
//@route POST /api/patients
//@access Private
const setPatient = (req, res) => {
  res.status(200).json({ message: "Patient added " });
};

// @desc update patient
// @route PUT /api/patients
// @access Private
const updatePatient = (req, res) => {
  res.status(200).json({ message: `Update Patient number: ${req.params.id}` });
};

// @desc delete patient
// @route DELETE /api/patients
// @access Private
const deletePatient = (req, res) => {
  res.status(200).json({ message: `Delete Patient number ${req.params.id}` });
};

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
};
