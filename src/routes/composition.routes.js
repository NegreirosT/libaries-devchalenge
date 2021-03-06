// @ts-nocheck
/**
 * Arquivo: src/routes/composition.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Composition'.
 * Data: 29/12/2020
 * Author: Thiago Negreiros
 */

const router = require('express-promise-router')();
const compositionController = require('../controllers/composition.controller');

//* ==> Definindo as rotas do CRUD - 'composition':

//* ==> Rota responsável por criar um nova 'Composition': (POST): localhost:3333/composition
router.post('/composition', compositionController.createComposition);

//* ==> Rota responsável por listar todos os 'Composition': (GET): localhost:3333/composition
router.get('/composition', compositionController.listAllComposition);

//* ==> Rota responsável por selecionar 'Composition' pelo 'Id': (GET): localhost:3333/composition/:id
router.get('/composition/:id', compositionController.findCompositionById);

//* ==> Rota responsável por atualizar 'Composition' pelo 'Id': (PUT): localhost: 3333/composition/:id
router.put('/composition/:id', compositionController.updateCompositionById);

//* ==> Rota responsável por excluir 'Composition' pelo 'Id': (DELETE): localhost:3333/composition/:id
router.delete('/composition/:id', compositionController.deleteCompositionById);


module.exports = router;