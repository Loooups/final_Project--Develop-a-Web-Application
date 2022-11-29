const asyncHandler = require("express-async-handler");
const studies = { idStudy: "098cvb456", studyDateStart: "12/04/2021" };

//@desc Get all physicians
//@route GET /api/physicians
//@access Private
const getPhysicians = asyncHandler(async (req, res) => {
  res.status(200).json(studies);
});

//@desc add physicians
//@route POST /api/physicians
//@access Private
const setPhysician = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Physician added " });
});

// @desc update physicians
// @route PUT /api/physicians
// @access Private
const updatePhysician = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update Physician number: ${req.params.id}` });
});

// @desc delete physicians
// @route DELETE /api/physicians
// @access Private
const deletePhysician = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Physician number ${req.params.id}` });
});

module.exports = {
  getPhysicians,
  setPhysician,
  updatePhysician,
  deletePhysician,
};
