const express = require("express");
const { getDishes } = require("../controllers/dishesControllers");

const dishesRouter = express.Router();

dishesRouter.get("/dishes", getDishes);

module.exports = dishesRouter;
