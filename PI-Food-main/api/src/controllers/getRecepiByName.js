require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");
const{Op}= require('sequelize');

module.exports = async (name)=>{

    const lowerName = name.toLowerCase();
    
    const dataBaseName = await Recipe.findAll({
        where :{name:{[Op.like]: `%${lowerName}%`}},
    });
    return dataBaseName;
   
}

/*Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. 
(No es necesario que sea una coincidencia exacta).
Debe poder buscarla independientemente de mayúsculas o minúsculas.
Si no existe la receta, debe mostrar un mensaje adecuado.
Debe buscar tanto las de la API como las de la base de datos.*/ 