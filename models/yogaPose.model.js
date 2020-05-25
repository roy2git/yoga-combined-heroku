const mongoose = require("mongoose");

const yogaPoseSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Number, required: false },
  image: { type: String, required: true },
});

module.exports = mongoose.model("YogaPose", yogaPoseSchema);
