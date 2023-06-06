require('dotenv').config();
const { API_KEY} = process.env;
const axios = require('axios');

module.exports = async (req,res)=>{
    const {idRecipe} = req.params;
   const {results} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
 const recepiFinded =  results.filter(e=>e.id === Number(idRecipe));
   res.status(200).json(recepiFinded);
}
