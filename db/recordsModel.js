const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now
    },
    amount: {
      type: Number,
      min: 0
    },
    description: {
      type: String,
      trim: true
    },
    initial: {
      type: Number,
      default: 10000
    }
  },
  { timestamps: true }
);

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
