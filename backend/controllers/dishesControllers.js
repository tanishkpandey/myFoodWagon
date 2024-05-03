const DishesModel = require("../model/Dishes");

const getDishes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;
    const mealtype = req.query.mealtype;
    const sort = req.query.sort || price-asc;

    let query = {};
    let sortConfig = {};

    switch (sort) {
      case "price-asc":
        sortConfig = { price: 1 }; // Low to high
        break;
      case "price-desc":
        sortConfig = { price: -1 }; // High to low
        break;
      case "rating-desc":
        sortConfig = { rating: -1 };
        break;
      default:
        sortConfig = { foodname: 1 }; // Default fallback
        break;
    }

    if (mealtype) {
      query.mealtype = mealtype;
    }

    const dishes = await DishesModel.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortConfig);

    const totalCount = await DishesModel.countDocuments(query);

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
