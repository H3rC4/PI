require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");


module.exports = async (name) => {
    const lowerName = name.toLowerCase();
    const { results } = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
      )
    ).data;
    const apiName = results.filter((receta) => {
      const lowerTitle = receta.title.toLowerCase();
      if (lowerTitle.includes(lowerName)){
       return receta; 
      } 
    });
    
    const modificatedResults = apiName.map((receta)=>{
     const  obj = {
        health: receta.healthScore,
        id: receta.id,
        name: receta.title,
        image: receta.image,
        resumen: receta.summary,
        paso:receta.analyzedInstructions,
        diets: receta.diets,
        api:true
      }
      return obj;
    })

    return modificatedResults;
  };
  