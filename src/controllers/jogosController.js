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

    static listarJogoPorCrossplatform = (req, res) => {
        jogos.find({crossplatform: true}, (err, jogo) => {
            if (!err){
                if (jogo.length > 0) {
                    res.status(200).send(jogo);
                } else {
                    res.status(200).send('Nenhum jogo cadastrado possui crossplatform');
                }
            } else {
                res.status(400).send({mensagem: `${err.message}`});
            }
        });
    }

    static listarJogosMultiplayer = (req, res) => {
        jogos.find({multiplayer: true}, (err, jogo) => {
            if (!err){
                if (jogo.length > 0) {
                    res.status(200).send(jogo);
                } else {
                    res.status(200).send('Nenhum jogo cadastrado possui multiplayer');
                }
            } else {
                res.status(400).send({mensagem: `${err.message}`});
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

    static atualizarJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndUpdate(id, { $set: req.body }, (err, jogo) => {
            if (!err) {
                res.status(200).send({ message: `${jogo.nome} atualizado com sucesso.` });
            } else {
                res.status(500).send({ message: `${err.message} - Erro ao atualizar o jogo.` });
            }
        });
    }

    static deletarJogo = (req, res) => {
        const id = req.params.id;
        jogos.findByIdAndDelete(id, (err, jogo) => {
            if (!err){
                res.status(200).send(`${jogo.nome} deletado com sucesso!`);
            } else {
                res.status(400).send({mensagem: `${err.message} - ID do jogo não encontrado`});
            }
        })
    }
  

}




export default JogoController;