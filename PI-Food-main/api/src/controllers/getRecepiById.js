require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");

module.exports = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const { results } = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
      )
    ).data;
    const apiRecipe = results.filter((e) => e.id === Number(idRecipe));
    const databaseRecipe = await Recipe.findOne({ where: { id: idRecipe } });
    if (apiRecipe.length === 0 && databaseRecipe == null)
      return res.status(404).send(`No existen recetas con el ID = ${idRecipe}`);
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
     return response.status(200).json(receta);
    }
    if(databaseRecipe){
      const{health, id, name, imagen, resumen, paso, diets} = databaseRecipe
      const receta = {
        health,
        id,
        name,
        imagen,
        resumen,
        paso,
        diets

      }
     return response.status(200).json(receta);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }

  //  res.status(200).json(recepiFinded);
};
/*Esta ruta obtiene el detalle de una receta específica. Es decir 
que devuelve un objeto con la información pedida en el detalle de una receta.
La receta es recibida por parámetro (ID).
Tiene que incluir los datos de los tipos de dietas asociados a la receta.
Debe funcionar tanto para las recetas de la API como para las de la base de datos.*/

