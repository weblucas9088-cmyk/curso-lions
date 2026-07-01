import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema ({
    imovelID: {
        type: String,
        require: [true, "O imovelID é obrigadorio!"],
    },

    nomeHospede: {
        type: String,
        require: [true, "O nome do hospede é obrigadorio!"],
    },

    emailHospede: {
        type: String,
        require: [true, "O email do hospede é obrigadorio!"],
    },

    dataEntrada: {
        type: String,
        require: [true, "A data de entrada é obrigadorio!"],
    },

    quantidadeNoites: {
        type: Number,
        require: [true, "A quantidade de noites é obrigadorio!"],
    },

    hospedes: {
        type: {nome: String, idade: Number},
        require: [true, "Os hospedes é obrigadorio!"],
    },

    valorTotal: {
        type: Number,
    },

    status: {
        type: String,
        default: "Pendente",
        enum: {
            values: ["Pendente", "Confirmada", "Cancelada"],
            message: "O status só pode ser Pendente, Confirmada ou Cancelada",
        },
    },

});

const reserva = mongoose.model("reservas", reservaSchema);

export default reserva;