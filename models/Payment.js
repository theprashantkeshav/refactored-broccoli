const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  order_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ["paid", "unpaid"],
    default: "unpaid",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Payment = mongoose.model("payment", PaymentSchema);
