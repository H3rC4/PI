require("dotenv").config();
const { Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const cleanedArray = (arr) => {
  return arr.map((e) => {
    return {
      diets: e.diets.map((diet) => diet.trim().replace(/-+$/, "")),
    };
  });
};

module.exports = async () => {
  const { results } = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    )
  ).data;
  const cleanedResponse = cleanedArray(results);
  const dietNames = new Set();
  cleanedResponse.forEach((item) => {
    item.diets.forEach((diet) => {
      dietNames.add(diet);
    });
  });

  const uniqueDietNames = [...dietNames];

 for(const dietName of uniqueDietNames) {
  await Diets.findOrCreate({
    where:{name: dietName},
  });
 }
  const dataBaseDiets = await Diets.findAll();
  return [...dataBaseDiets];
};

/*Obtiene un arreglo con todos los tipos de dietas existentes.
En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos
 con las dietas de la documentación.
Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de 
la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.*/
