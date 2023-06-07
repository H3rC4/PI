const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecepiById = require('../controllers/getRecepiById');
const postRecepi = require('../controllers/postRecepi');
const getDiets = require('../controllers/getDiets');
const recipeHandler = require('../handlers/recipeHandler')

const router = Router();

router.get('/recipes/:idRecipe',getRecepiById);

router.get('/recipes',recipeHandler);

router.post('/recipes',postRecepi);

router.get('/diets',getDiets);


module.exports = router;
