const mongoose = require("mongoose");

const studySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please complete name field"],
    },
    startDate: {
      type: Date,
      required: [true, "Please complete start date field"],
    },
    endDate: {
      type: Date,
      required: [true, "Please complete end date field"],
    },
    status: {
      type: String,
      required: [true, "Please complete end status field"],
    },
    drugSubstance: {
      type: String,
      required: [true, "Please complete drug substance field"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Study", studySchema);
