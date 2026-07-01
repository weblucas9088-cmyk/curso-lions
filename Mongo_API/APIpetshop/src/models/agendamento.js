import mongoose from "mongoose";

const agendamentoSchema = new mongoose.Schema({
    nomePet: {
        type: String,
        require: [true, "O nome do pet é obrigatório!"],
    },

    especie: {
        type: String,
        require: [true, "A espécie do pet é obrigatória!"],
        enum: {
         values: ["Cão", "Gato", "Outro"],
         message: "A espécie deve ser Cão, Gato ou Outro!"
        },
    },

    nomeDono: {
        type: String,
        require: [true, "O nome do dono é obrigatório!"],
    },

    telefoneDono: {
        type: String,
        require: [true, "O telefone do dono é obrigatório!"],
    },

    servico: {
        type: String,
        required: [true, "O serviço é obrigatório!"],
        enum: {
            values: ["Banho", "Tosa", "bamho e Tosa"],
            message: "O serviço deve ser Banho, Tosa ou Banho e Tosa!"
        }
    },

    data: {
        type: String,
        required: [true, "A data é obrigatória!"],
    },

    valor: {
        type: Number,
    },

    status: {
        type: String,
    default: "Agendado",
    enum: {
        values: ["Agendado", "Concluído", "Cancelado"],
        message: "O status deve ser Agendado, Concluído ou Cancelado!"
    }
},
});

const Agendamento = mongoose.model("Agendamentos", agendamentoSchema );

export default Agendamento;
