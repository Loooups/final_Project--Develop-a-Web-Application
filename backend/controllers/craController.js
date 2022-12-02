const asyncHandler = require("express-async-handler");
const Cra = require("../models/cra.model.js");
const User = require("../models/user.model.js");

//@desc Get all physicians
//@route GET /api/physicians
//@access Private
const getCras = asyncHandler(async (req, res) => {
  const cra = await Cra.find({ user: req.user.id });
  res.status(200).json(cra);
});

//@desc add physicians
//@route POST /api/physicians
//@access Private
const setCra = asyncHandler(async (req, res) => {
  const newCra = await Cra.create({
    name: req.body.name,
    study_name: req.body.study_name,
    user: req.user.id,
  });
  res.status(200).json(newCra);
});

// @desc update Clinical Research Associates
// @route PUT /api/Clinical Research Associates
// @access Private
const updateCra = asyncHandler(async (req, res) => {
  const craToUpdate = await Cra.findById(req.params.id);
  if (!craToUpdate) {
    res.status(400);
    throw new Error("CRA not found");
  }

  const user = await User.findById(req.user.id);

  //  Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //  Make sure the logged in user matches the CRA user
  if (craToUpdate.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedCra = await Cra.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCra);
});

// @desc delete Clinical Research Associates
// @route DELETE /api/Clinical Research Associates
// @access Private
const deleteCra = asyncHandler(async (req, res) => {
  const craToDelete = await Cra.findById(req.params.id);
  if (!craToDelete) {
    res.status(400);
    throw new Error("CRA not found");
  }

  const user = await User.findById(req.user.id);

  //  Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //  Make sure the logged in user matches the CRA user
  if (craToDelete.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Cra.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCras,
  setCra,
  updateCra,
  deleteCra,
};