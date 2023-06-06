require('dotenv').config();
const { API_KEY} = process.env;
const axios = require('axios');


module.exports = async (req,res)=>{
   const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
   console.log(response.results);
   res.status(200).json(response.results)
};

