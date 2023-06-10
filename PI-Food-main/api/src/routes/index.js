const { Router } = require('express');


const recipeHandler = require('../handlers/recipeHandler')
const handlerDiets = require('../handlers/handlerDiets');
const postRecepi = require('../handlers/postRecepi');
const getById = require('../controllers/getById');

const router = Router();

router.get('/recipes/:idRecipe',getById);

router.get('/recipes',recipeHandler);

router.post('/recipes',postRecepi);

router.get('/diets',handlerDiets);


module.exports = router;
