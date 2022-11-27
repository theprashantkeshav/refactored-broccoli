const { createOrder, verifyOrder } = require("../services/payment");
const router = require("express").Router();
const Payment = require("../models/Payment");
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  var order = await createOrder({
    amount: 99900, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  });

  var payment = new Payment({ order_id: order.id, user: req.user.id });
  await payment.save();

  res.json(order);
});

router.post("/success", auth, async (req, res) => {
  var payment = await Payment.findOne({ order_id: req.body.order_id });

  if (!payment) {
    res.status(404);
    return;
  }

  let isVerified = verifyOrder(
    req.body.order_id,
    req.body.payment_id,
    req.body.signature
  );

  if (isVerified) {
    payment.status = "paid";
    payment.save();
  }

  await User.updateOne(
    { _id: payment.user },
    { $set: { "payment.isPaid": true } }
  );
  res.json({ isVerified });
});

router.get("/is-paid", auth, async (req, res) => {
  var hasPayment = await Payment.findOne({ user: req.user.id, status: "paid" });
  res.json({ is_paid: hasPayment !== null });
});

module.exports = router;
