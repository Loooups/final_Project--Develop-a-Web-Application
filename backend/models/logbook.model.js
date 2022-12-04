const mongoose = require("mongoose");

const logbookSchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Please complete patient name field"],
    },
    date: {
      type: Date,
      required: [true, "Please complete date field"],
    },
    comments: {
      type: String,
      required: [true, "Please complete comments field"],
    },
    studyName: {
      type: String,
      required: [true, "Please complete study name field"],
    },
    patientWeight: {
      type: Number,
      required: [true, "Please complete weight field"],
    },
    patientBloodPressure: {
      type: Number,
      required: [true, "Please complete blood pressure field"],
    },
    patientTemperature: {
      type: Number,
      required: [true, "Please complete temperature field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Logbook", logbookSchema);
