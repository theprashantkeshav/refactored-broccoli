const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const User = require("../models/User");
const { getGoogleAccountFromCode, urlGoogle } = require("../services/google");

router.post(
  "/",
  body("email", "Please Enter a valid Email").isEmail(),
  body("password", "Password is Required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //? Check if user exists or not

      var user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: { msg: "Invalid Credentials" } });
      }

      //? Compare the password

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: { msg: "Invalid Credentials" } });
      }

      //? Generate Token

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

router.get("/google", async (req, res) => {
  var url = urlGoogle();

  res.redirect(url);
});

router.get("/google/callback", async (req, res) => {
  try {
    //? Check if user exists or not
    var data = await getGoogleAccountFromCode(req.query.code);
    var email = data.email;
    var name = data.family_name;
    console.log(name);

    var user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
      });

      await user.save();
    }

    //? Generate Token

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
        // res.redirect("http://localhost:3000/auth/" + token);
        res.redirect("https://troppers.com/auth/" + token);
        // res.redirect("https://troopers421.herokuapp.com/auth/" + token);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
