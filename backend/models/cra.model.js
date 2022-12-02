const mongoose = require("mongoose");

const craSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },

    name: {
      type: String,
      required: [true, "Please complete name field"],
    },
    study_name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cra", craSchema);
