require('dotenv').config();
const { API_KEY} = process.env;
const axios = require('axios');
const { Recipe } = require("../db");

module.exports = async ()=>{
 
   const dataBaseResult = await Recipe.findAll();
   const {results} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
   const allRecipes = [...dataBaseResult,...results]
    
     return allRecipes;
     
  
};


