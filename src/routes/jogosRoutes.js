import express from 'express';
import JogoController from '../controllers/jogosController.js';

const router = express.Router();

router
    .get('/jogos', JogoController.listarJogos)
    .get('/jogos/:id', JogoController.listarJogoPorId)
    .post('/jogos', JogoController.cadastrarJogo)


export default router;