const { Recipe } = require("../db");

module.exports = async (req, res)=>{
  
  try {
      const{name, image, resumen,health,paso}= req.body;
      if(!name || !resumen || !health || !image || !paso ){
        return  res.status(404).send('Faltan datos') 
      }
      await Recipe.create({name, image, resumen, health, paso})
      const allRecipes = await Recipe.findAll();
      return res.status(200).json(allRecipes);
    
  } catch (error) {
      res.status(500).send(error)

  }
  
  

}
