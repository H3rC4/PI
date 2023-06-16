require('dotenv').config();
const { API_KEY} = process.env;
const axios = require('axios');
const { Recipe } = require("../db");

module.exports = async ()=>{
 
   const dataBaseResult = await Recipe.findAll();
   const {results} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
   const modificatedResults = results.map((receta)=>{
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
   
   const allRecipes = [...dataBaseResult,...modificatedResults]
    
     return allRecipes;
     
  
};


