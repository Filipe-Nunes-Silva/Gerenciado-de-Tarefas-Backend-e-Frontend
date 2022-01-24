const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


const {TarefaController} = require('../controllers/TarefaController');
router.get('/',TarefaController.mostrarTarefas);
router.get('/concluidas',TarefaController.mostrarTarefasConcluidas);

router.get('/adicionar',TarefaController.criarTarefa);
router.post('/adicionar',TarefaController.salvarTarefa);

router.post('/deletar',TarefaController.confirmaDeletar);
router.post('/deletar/sim',TarefaController.delatarTarefa);

router.get('/editar/:id',TarefaController.editarTarefa);
router.post('/editar',TarefaController.confirmaEditarTarefa);

router.post('/status',TarefaController.statusTarefa);

module.exports = router;
