require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

module.exports = async () => {

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
  return modificatedApiResults;
};
