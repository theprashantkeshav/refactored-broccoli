const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const dev_db_url = `mongodb+srv://troppers:troppers001@cluster0.tbo53.mongodb.net/test`;

  try {
    await mongoose.connect(process.env.MONGO_URI || dev_db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Database Connected...");
  } catch (error) {
    console.error(error.message);

    // Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;
