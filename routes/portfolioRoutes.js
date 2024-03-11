const express = require("express");
const router = express.Router();
const { getPortfolio } = require("../controllers/portfolioControllers");

router.post("/", getPortfolio);

module.exports = router;
