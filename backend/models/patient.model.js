const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete name field"],
    },
    age: {
      type: Number,
      required: [true, "Please complete age field"],
    },
    gender: {
      type: String,
      required: [true, "Please complete gender field"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Please complete blood group field"],
    },
    studyName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
