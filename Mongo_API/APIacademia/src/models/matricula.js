import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema({
    nomeAluno: {
        type: String,
        require: [true, "O nome do aluno é obrigatório!"],
    },

    idade: {
        type: Number,
        require: [true, "A idade do aluno é obrigatória!"],
    },

    modalidade: {
        type: String,
        require: [true, "A modalidade é obrigatório!"],
        enum: {
            values: ["Musculação", "Funcional", "Dança"],
            message: "A modalidade deve ser Musculação, Funcional ou Dança!"
        },
    },

    plano: {
        type: String,
        require: [true, "O plano é obrigatório!"],
        enum: {
            values: ["Mensal", "Trimestral", "Semestral"],
            message: "O plano deve ser Mensal, Trimestral ou Semestral!",
        },
    },

    dataMatricula: {
        type: String,
        require: [true, "A data da matricula é obrigatório!"],
    },

    valorMensal: {
        type: Number,
    },

    valorTotal: {
        type: Number,
    },

    status: {
        type: String,
        default: "Ativa",
        enum: {
            values: ["Ativa", "Pausada", "Cancelada"],
            message: "O status deve ser Ativa, Pausada ou Cancelada!"
        },
    },
});

const matricula = mongoose.model("Matriculas", matriculaSchema);

export default matricula;