require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");

module.exports = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const id = Number(idRecipe);
    const databaseRecipe = await Recipe.findAll({where:{id}});
    const { results } = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
      )
    ).data;
    const apiRecipe = results.filter((e) => e.id === Number(idRecipe));
    
    
    if (apiRecipe.length === 0 && databaseRecipe == null){
      return res.status(404).send(`No existen recetas con el ID = ${idRecipe}`)
    };
    if(apiRecipe[0]){
      const receta = {
        health: apiRecipe[0].healthScore,
        id: apiRecipe[0].id,
        name: apiRecipe[0].title,
        imagen: apiRecipe[0].imagen,
        resumen: apiRecipe[0].summary,
        paso:apiRecipe[0].analyzedInstructions,
        diets: apiRecipe[0].diets
      }
     return res.status(200).json(receta);
    }
   
     return res.status(200).json(databaseRecipe);
   
  } catch (error) {
    res.status(500).send(error.message);
  }

};

