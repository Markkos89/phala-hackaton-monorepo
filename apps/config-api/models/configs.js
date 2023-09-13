const mongoose = require("mongoose");

const configs = new mongoose.Schema({
  varName: {
    type: String,
    required: true,
  },
  varValue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Configs", configs);
