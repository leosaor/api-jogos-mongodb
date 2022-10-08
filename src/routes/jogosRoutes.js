import express from 'express';
import JogoController from '../controllers/jogosController.js';

const router = express.Router();

router
    .get('/jogos', JogoController.listarJogos)
    .get('/jogos/crossplatform/', JogoController.listarJogoPorCrossplatform)
    .get('/jogos/multiplayer', JogoController.listarJogosMultiplayer)
    .get('/jogos/:id', JogoController.listarJogoPorId)
    .post('/jogos', JogoController.cadastrarJogo)
    .put('/jogos/:id', JogoController.atualizarJogo)
    .delete('/jogos/:id', JogoController.deletarJogo)


export default router;