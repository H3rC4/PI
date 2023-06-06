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
/*Esta ruta recibirá todos los datos necesarios para crear una nueva receta
 y relacionarla con los tipos de dieta solicitados.
Toda la información debe ser recibida por body.
Debe crear la receta en la base de datos, y esta debe estar relacionada
 con los tipos de dieta indicados (al menos uno).*/