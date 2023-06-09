const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getById = require('../controllers/getById');
const postRecepi = require('../handlers/postRecepi');
const getDiets = require('../handlers/getDiets');
const recipeHandler = require('../handlers/recipeHandler')

const router = Router();

router.get('/recipes/:idRecipe',getById);

router.get('/recipes',recipeHandler);

router.post('/recipes',postRecepi);

router.get('/diets',getDiets);


module.exports = router;
