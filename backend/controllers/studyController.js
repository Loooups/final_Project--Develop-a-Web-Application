const asyncHandler = require("express-async-handler");
const Study = require("../models/study.model.js");

//@desc Get all studies
//@route GET /api/studies
//@access Private
const getStudies = asyncHandler(async (req, res) => {
  const studies = await Study.find();
  res.status(200).json(studies);
});

//@desc add study
//@route POST /api/studies
//@access Private
const setStudy = asyncHandler(async (req, res) => {
  const newStudy = await Study.create({
    name: req.body.name,
    date: req.body.date,
    drugSubstance: req.body.drugSubstance,
    listOfPatients: req.body.listOfPatients,
    cra: req.body.cra,
  });

  res.status(200).json(newStudy);
});

// @desc update study
// @route PUT /api/studies
// @access Private
const updateStudy = asyncHandler(async (req, res) => {
  const studyToUpdate = await Study.findById(req.params.id);
  if (!studyToUpdate) {
    res.status(400);
    throw new Error("Study not found");
  }

  const updatedStudy = await Study.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedStudy);
});

// @desc delete study
// @route DELETE /api/studies
// @access Private
const deleteStudy = asyncHandler(async (req, res) => {
  const studyToDelete = await Study.findById(req.params.id);
  if (!studyToDelete) {
    res.status(400);
    throw new Error("Study not found");
  }

  await Study.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getStudies,
  setStudy,
  updateStudy,
  deleteStudy,
};
