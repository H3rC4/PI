const { Recipe } = require("../db");
const { Diets } = require("../db");

module.exports = async (req, res)=>{
  const{name, image, resumen, health, paso, diets}= req.body;
  
  try {
      if(!name || !resumen || !health || !image || !paso || !diets  ){
        return  res.status(404).send('Faltan datos') 
      }
     const recetaCreda = await Recipe.create({name, image, resumen, health, paso, diets})
     
     
      const findDiets = await Diets.findAll({
        where: {
          id: diets,
        },
      });
    await recetaCreda.addDiets(findDiets);
     
      return res.status(200).send('Tu receta se a creado satisfactoria mente');
    
  } catch (error) {
     return res.status(500).send(error)

  }
}
