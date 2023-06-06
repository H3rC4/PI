require('dotenv').config();
// const { API_KEY} = process.env;
// const axios = require('axios');
const respuesta = require('./los100')

module.exports = async (req,res)=>{
 
 
  res.status(200).json(respuesta)
//    const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data;
//    res.status(200).json(response.results)
};

