import mongoose from 'mongoose';

const jogoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        genero: {type: String},
        desenvolvedora: {type: String},
        plataformas:{
                pc: {type: Boolean, required: true},
                playstation: {type: Boolean},
                xbox: {type: Boolean},
                nintendo: {type: Boolean},
                mobile: {type: Boolean}  
        },
        multiplayer: {type: Boolean, required: true},
        crossplatform: {type: Boolean}
    }
);

const jogos = mongoose.model('jogos', jogoSchema);

export default jogos;