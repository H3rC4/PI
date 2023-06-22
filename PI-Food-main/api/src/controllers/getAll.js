require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
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




   const {results} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
   const modificatedApiResults = results.map((receta)=>{
    const  obj = {
       health: receta.healthScore,
       id: receta.id,
       name: receta.title,
       image: receta.image,
       resumen: receta.summary,
       paso:receta.analyzedInstructions,
       diets: receta.diets,
       api: true
     }
     return obj;
   })

   const allRecipes = [...modificatedDBResults,...modificatedApiResults]

     return allRecipes;
};
