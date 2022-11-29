const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete name field"],
    },
    birth_date: {
      type: Date,
      required: [true, "Please complete birth date field"],
    },
    gender: {
      type: String,
      required: [true, "Please complete gender field"],
    },
    weight: {
      type: String,
      required: [true, "Please complete weight field"],
    },
    height: {
      type: String,
      required: [true, "Please complete height field"],
    },
    blood_group: {
      type: String,
      required: [true, "Please complete blood group field"],
    },
    study_name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
