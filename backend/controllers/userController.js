// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @desc Authenticate a user
// @route POST /pai/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc Get user data
// @route get /api/users/login
// @access Public
const getMyData = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = { registerUser, loginUser, getMyData };
