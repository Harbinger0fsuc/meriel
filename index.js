require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3500;
// const Portfolio = require("./models/portfolioModel");
const portfolioRoutes = require("./routes/portfolioRoutes");
// const portfolioJson = require("./portfolio.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/portfolio", portfolioRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "meriel",
  })
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Port is ${PORT}`);
    });
  })
  // .then(() => {
  //   Portfolio.create(portfolioJson);
  // })
  .catch((err) => {
    console.log(err);
  });
