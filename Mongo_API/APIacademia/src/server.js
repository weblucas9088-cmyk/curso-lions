import express from "express";
import dotenv from "dotenv";
import conectDB from "./db.js";
import matricula from "./models/matricula.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000
conectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({mensagem: "Servidor rodando"});
});

app.post("/matriculas", async (req, res) => {
    try {
        const {nomeAluno, idade, modalidade, plano, dataMatricula} = req.body

        let valorMensal = 0;
        let valorTotal = 0;

        if (modalidade) {
            switch (modalidade) {
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
                    return res.status(400).json({mensagem: "Modalidade inválida"});
            }
        }

        if (plano) {
            switch (plano) {
                case "Mensal":
                    valorTotal = 1 * valorMensal;
                    break;
                case "Trimestral":
                    valorTotal = 3 * valorMensal * 0.9;
                    break;
                case "Semestral":
                    valorTotal = 6 * valorMensal * 0.85;
                    break;
                default:
                    return res.status(400).json({mensagem: "Plano inválido"});
            }
        }

        const novaMatricula = new matricula ({
            nomeAluno,
            idade,
            modalidade,
            plano,
            dataMatricula,
            valorMensal,
            valorTotal,
        });

        await novaMatricula.save();

        res.status(201).json({mensagem: "Matricula criada com sucesso", matricula: novaMatricula});

    } catch (error) {
        res.status(400).json({mensagem: `Erro ao criar a matricula: ${error.message}`});
    }
}); 

app.get("/matriculas/buscar", async (req, res) => {
    try {
        const nome = req.query.nome;

        const matriculas = await matricula.find({ nomeAluno: {$regex: nome , $options: "i"} });
        res.status(200).json({mensagem: "Matricula encontrada com sucesso", matricula: matriculas});
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao buscar matricula: ${error.message}`});
   } 
});

app.get("/matriculas", async (req, res) => {
    try {
        const todasMatriculas = await matricula.find();

        res.status(200).json({mensagem: "Todas as matriculas foram listadas com sucesso", matricula: todasMatriculas});
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao listar matricula: ${error.message}`});
    }
});

app.patch("/matricula/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const matriculaAtualizada = await matricula.findByIdAndUpdate(id, { status }, {runValidators: true, new: true});

        if (!matriculaAtualizada) {
            return res.status(404).json({mensagem: "Matricula não encontrada"});
        } else {
            return res.status(200).json({mensagem: "Matricula atualizada com sucesso", matricula: matriculaAtualizada});
        }
    } catch (error) {
         res.status(500).json({mensagem: `Erro ao atualizar matricula: ${error.message}`});
    }
});

app.delete("/matricula/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const matriculaDeletada = await matricula.findByIdAndDelete(id);
        
        if (!matriculaDeletada) {
            return res.status(404).json({mensagem: "Matricula não encontrada"});
        }else {
            return res.status(200).json({mensagem: "Matricula deletada com sucesso", matricula: matriculaDeletada});
        }
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao deletar matricula: ${error.message}`});
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
