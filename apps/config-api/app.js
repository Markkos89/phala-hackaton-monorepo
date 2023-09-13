const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Middleware
app.use(bodyParser.json());

// Define Routes (to be created in the next step)
const configRoutes = require("./routes/config");
app.use("/api/config", configRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
