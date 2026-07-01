import mongoose from "mongoose";

const avaliacaoSchema = new mongoose.Schema ({
    imovelID: {
        type: String,
        require: [true, "O imovelID é obrigadorio!"],
    },

    nomeUsuario: {
        type: String,
        require: [true, "O nome do usúario é obrigadorio!"],
    },

    nota: {
        type: Number,
        require: [true, "A nota é obrigadoria1"],
        enum: {
            values: ["1", "2", "3", "4", "5"],
            message: "A nota só pode ser 1, 2, 3, 4, ou 5",
        },
    },

    comentario: {
        type: String,
        require: [true, "O comentario é obrigadorio!"],
        maxlength: [true, 10],
    },

});

const avaliacao = mongoose.model("avaliações", avaliacaoSchema);

export default avaliacao;