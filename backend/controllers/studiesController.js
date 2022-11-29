const studies = { idStudy: "098cvb456", studyDateStart: "12/04/2021" };

//@desc Get all studies
//@route GET /api/studies
//@access Private
const getStudies = (req, res) => {
  res.status(200).json(studies);
};

//@desc add study
//@route POST /api/studies
//@access Private
const setStudy = (req, res) => {
  res.status(200).json({ message: "Study added " });
};

// @desc update study
// @route PUT /api/studies
// @access Private
const updateStudy = (req, res) => {
  res.status(200).json({ message: `Update Study number: ${req.params.id}` });
};

// @desc delete study
// @route DELETE /api/studies
// @access Private
const deleteStudy = (req, res) => {
  res.status(200).json({ message: `Delete Study number ${req.params.id}` });
};

module.exports = {
  getStudies,
  setStudy,
  updateStudy,
  deleteStudy,
};
