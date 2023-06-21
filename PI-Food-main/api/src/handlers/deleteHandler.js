const { Recipe } = require("../db");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).send("No se encontró la receta");
    }

    await recipe.destroy();
    return res.status(200).send("La receta ha sido eliminada correctamente");
  } catch (error) {
    return res.status(500).send(error);
  }
};