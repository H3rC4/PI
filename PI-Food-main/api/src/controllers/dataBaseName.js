const { Recipe } = require("../db");
const { Op } = require("sequelize");

module.exports = async (name) => {
  const lowerName = name.toLowerCase();
  const dataBaseName = await Recipe.findAll({
    where: { name: { [Op.iLike]: `%${lowerName}%` } },
  });

  return dataBaseName;
};
