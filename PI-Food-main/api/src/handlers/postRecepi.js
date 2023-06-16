const { Recipe } = require("../db");

module.exports = async (req, res)=>{
  
  try {
      const{name, image, resumen,health,paso, diets}= req.body;
      if(!name || !resumen || !health || !image || !paso || !diets  ){
        return  res.status(404).send('Faltan datos') 
      }
      await Recipe.create({name, image, resumen, health, paso, diets})
      return res.status(200).send('Tu receta se a creado satisfactoria mente');
    
  } catch (error) {
     return res.status(500).send(error)

  }
}
