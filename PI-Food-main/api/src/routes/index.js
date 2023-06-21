const { Router } = require('express');


const recipeHandler = require('../handlers/recipeHandler');
const deleteHandler = require('../handlers/deleteHandler');
const handlerDiets = require('../handlers/handlerDiets');
const postRecepi = require('../handlers/postRecepi');
const getById = require('../controllers/getById');

const router = Router();

router.get('/recipes/:idRecipe',getById);

router.delete('/recipes/:id',deleteHandler);

router.get('/recipes',recipeHandler);

router.post('/recipes',postRecepi);

router.get('/diets',handlerDiets);

module.exports = router;
