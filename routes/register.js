const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("../models/User");

router.post(
  "/",
  body("name", "Name is required").not().isEmpty(),
  body("email", "Please Enter a valid Email").isEmail(),
  body("password", "Please Enter a password with 6 or more character").isLength(
    { min: 6 }
  ),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // ? check if user already exists
      var user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: { msg: "User already exists" } });
      }

      user = new User({
        name,
        email,
        password,
      });

      //? encrypt the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //? return token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
