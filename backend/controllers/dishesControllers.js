const DishesModel = require("../model/Dishes");

const getDishes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    const dishes = await DishesModel.find({})
      .skip(skip)
      .limit(limit);

    const totalCount = await DishesModel.countDocuments();

    res.status(200).json({
      dishes,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { getDishes };
