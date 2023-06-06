const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecepiById = require('../controllers/getRecepiById');
const getRecepiByName = require('../controllers/getRecepiByName');
const postRecepi = require('../controllers/postRecepi');
const getDiets = require('../controllers/getDiets');
const getAll = require('../controllers/getAll');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe',getRecepiById);
router.get('/recipes/name?="..."',getRecepiByName);
router.post('/recipes',postRecepi);
router.get('/recipes',getAll);
router.get('/diets',getDiets);


module.exports = router;
