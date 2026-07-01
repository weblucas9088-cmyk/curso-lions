import express from "express";
import dotenv from "dotenv";
import conectDB from "./db.js";
import matricula from "./models/matricula.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000
conectDB();

app.use(express.json());

app.get(("/"), (req, res) => {
    res.json ({mensagem: "Servidor rodando"});
});

app.post(("/matriculas"), async (req, res) => {
    try {
        const {nomeAluno, Idade, Modalidade, Plano, dataMatricula} = req.body

        if (Modalidade) {
            switch (Modalidade) {
                case "Musculação":
                    valorMensal = 90;
                    break;
                case "Funcional":
                    valorMensal = 120;
                    break;
                case "Dança":
                    valorMensal = 100;
                    break;
                default:
                    console.log("Serviço inválido");
                    break;
            }
        }
        if (Plano) {
            switch (Plano) {
                case "Mensal":
                    valorTotal = 1 * valorMensal

                    break;
                case "Trimestral":

                    valorTotal = 3 * valorTotal * 0.9

                    break;

                case "Semestral":

                    valorTotal = 6 * valorMensal * 0.85

                    break;
            
                default:
                    console.log("Serviço inválido");
                    break;
            }
        }

        const novaMatricula = new matricula ({
            nomeAluno,
            Idade,
            Modalidade,
            Plano,
            dataMatricula,
            valorMensal,
            valorTotal,
        });

        await novaMatricula.save();

        res.status(201).json({mensagem: "Matricula criada com sucesso", matricula: novaMatricula});

    } catch (error) {
        res.status(400).json({message: `Erro ao criar a matricula: ${error.mensagem}`})
    }
}); 

app.get(("/matriculas"), async (req, res) => {
    try {
        const todasMatriculas = await matricula.find();

        res.status(200)({mensagem: "Todas as matriculas foram listadas com sucesso", matricula: todasMatriculas});
    } catch (error) {
        
        res.status(400)({mensagem: `Erro ao listar matricula: ${error.message}`});
    }
});

app.get(("/matriculas/buscar"), async (req, res) => {
    try {
        const nome = req.query.nome;

        const matriculas = await matricula.find({ nomeAluno: {$regex: nome , $option: "i"} });
        res.status(200).json({mensagem: "Matricula encontrada com sucesso", matricula: matriculas});
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao buscar matricula: ${error.message}`});
   } 
});

app.patch(("/matricula/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const { Pausada } = req.body;
        const matriculaAtualizado = await matricula.findByIdAndDelete(id, { status: Pausada }, {runValidators: true, new: true});

        if (!matriculaAtualizado) {
            return res.status(404).json({mensagem: "Matricula não encontrada"});
        } else {
            return res.status(200).json({mensagem: "Matricula atualizada com sucesso", matricula: matriculaAtualizado});
        }
    } catch (error) {
         res.status(500).json({mensagem: `Erro ao atualizar matricula: ${error.message}`});
    }
});

app.delete(("/marticula/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const matriculaDeletada = matricula.findByIdAndDelete(id);
        
        if (!matriculaDeletada) {
            return res.status(404).json({mensagem: "Matricula não encontrada"});
        }else {
            return res.status(200).json({mensagem: "Matricula deletada com sucesso", matricula: matriculaDeletada});
        }
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao deletar matricula: ${error.message}`});
    }
});


app.listen((process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});