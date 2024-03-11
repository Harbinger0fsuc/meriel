const mongoose = require("mongoose");
const Portfolio = require("../models/portfolioModel");

const getPortfolio = async (req, res) => {
  try {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    const portfolio = await Portfolio.find({})
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);

    res
      .status(200)
      .json({ success: true, portfolio, postSize: portfolio.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPortfolio };
