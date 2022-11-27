const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  picture: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  payment: {
    _id: false,
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = User = mongoose.model("user", UserSchema);
