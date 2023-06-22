require("dotenv").config();
const { Recipe, Diets } = require("../db");

module.exports = async () => {
  const dataBaseResult = await Recipe.findAll({
    include: Diets,
  });
  const modificatedDBResults = dataBaseResult.map((e)=>{
    const obj = {
      health: e.health,
      id: e.id,
      name: e.name,
      image: e.image,
      resumen: e.resumen,
      paso:e.paso,
      diets: e.Diets.map((e)=> e.name),
      api: false
    }
    return obj
  })
  return modificatedDBResults
}