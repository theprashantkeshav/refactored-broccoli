const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const Lecturette = require("../models/Lecturette");

router.post(
  "/",
  body("title", "Title is required").not().isEmpty(),
  body("category", "Category is required").not().isEmpty(),
  body("content", "Content is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, category, content } = req.body;
    try {
      let lecturette = new Lecturette({
        title,
        category,
        content,
      });
      await lecturette.save();
      res.send("Success");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
