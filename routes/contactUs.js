const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const Contact = require("../models/ContactUs");

router.post(
  "/",
  body("name", "Name is required").not().isEmpty(),
  body("email", "Please enter a valid Email").isEmail(),
  body("message", "Message is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      let contact = new Contact({
        name,
        email,
        message,
      });
      await contact.save();
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
