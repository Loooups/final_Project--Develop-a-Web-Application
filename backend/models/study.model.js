const mongoose = require("mongoose");

const studySchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },

    name: {
      type: String,
      required: [true, "Please complete name field"],
    },
    date: {
      type: Date,
      required: [true, "Please complete start date field"],
    },
    drugSubstance: {
      type: String,
      required: [true, "Please complete drug substance field"],
    },
    listOfPatients: [{ type: String }],
    cra: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Study", studySchema);
