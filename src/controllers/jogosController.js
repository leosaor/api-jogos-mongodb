import jogos from '../models/Jogo.js';

class JogoController {

    static listarJogos = (req, res) => {
        jogos.find((err, jogos) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(jogos);
            }
        });
    }

    static listarJogoPorId = (req, res) => {
        const id = req.params.id;

        jogos.findById(id, (err, jogo) => {
            if (!err){
                res.status(200).send(jogo);
            } else {
                res.status(400).send({mensagem: `${err.message} - ID do jogo não encontrado`});
            }
        });
    }

    static cadastrarJogo = (req, res) => {
        let jogo = new jogos(req.body);
        jogo.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Erro ao cadastrar o jogo.` });
            } else {
                res.status(201).send(jogo.toJSON());
            }
        })
    }


}



export default JogoController;