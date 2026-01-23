const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});
