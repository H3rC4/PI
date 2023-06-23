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

    const newRecipe = await Recipe.findOne({where: {name}, include:Diets})
    const recipe = {
      health: newRecipe.health,
      id: newRecipe.id,
      name: newRecipe.name,
      image: newRecipe.image,
      resumen: newRecipe.resumen,
      paso:newRecipe.paso,
      diets: newRecipe.Diets.map((e)=> e.name),
      api: false
    }
    
     
      return res.status(200).json(recipe);
    
  } catch (error) {
     return res.status(500).send(error)

  }
}
