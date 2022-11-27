const Razorpay = require("razorpay");
const crypto = require("crypto");

function getAPI() {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

async function createOrder(options) {
  return await getAPI().orders.create(options);
}

function verifyOrder(orderId, paymentId, signature) {
  // Creating hmac object
  let hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

  // Passing the data to be hashed
  hmac.update(orderId + "|" + paymentId);

  // Creating the hmac in the required format
  const generated_signature = hmac.digest("hex");

  return signature === generated_signature;
}

module.exports = {
  createOrder,
  verifyOrder,
};
