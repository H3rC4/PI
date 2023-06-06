require('dotenv').config();
const { API_KEY} = process.env;
const axios = require('axios');
//const respuesta = require('./los100')

module.exports = async (req,res)=>{
 
// res.status(200).json(respuesta)
   const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
   res.status(200).json(response.results)

};
/*const getAllRecipes = async () => {
  //Traigo todas las recetas, ya sean de la BD o de la API
  

  const apiRecipe = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    )
  ).data;
  const newApi = cleanArray(apiRecipe.results);
  //Concateno los resultados obtenidos de la api y limpio el array con la funcion anteriormente mencionada
  return [...databaseRecipe, ...newApi];
};*/

