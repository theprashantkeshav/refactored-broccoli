const express = require("express");
const connectDB = require("./connectDB/db");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();

//* INIT Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//* Connect to Database
connectDB();

app.get("/api/test", (req, res) => {
  res.send("Test working");
});

//* Define Routes
app.use("/register", require("./routes/register"));
app.use("/users", require("./routes/users"));
app.use("/login", require("./routes/login"));
app.use("/contact", require("./routes/contactUs"));
app.use("/lecturette", require("./routes/lecturette"));
app.use("/payment", require("./routes/payment"));

// if (process.env.NODE_ENV === "production") {
//   //?SET STATIC FOLDER
//   app.use(express.static("front-end/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
