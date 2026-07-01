import mongoose from "mongoose";

const imovelSchema = new mongoose.Schema ({
    titulo: {
        type: String,
        require: [true, "O titulo é obrigadorio!"],
    },

    descricao: {
        type: String,
        require: [true, "A descrição é obrigadorio!"],
    },

    localizacao: {
        type: String,
        require: [true, "A localização é obrigadorio!"],
    },

    precoNoite: {
        type: Number,
        require: [true, "A precoNoite é obrigadorio!"],
    },

    capacidadeMaxima: {
        type: Number,
        require: [true, "A capacadade Maxima é obrigadorio!"],
    },

    disponivel: {
        type: Boolean,
        require: [true],
    },

});

const imovel = mongoose.model("imovels", imovelSchema);

export default imovel;