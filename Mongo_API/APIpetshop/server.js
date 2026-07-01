import dotenv from "dotenv";
import app from "./app.js"
import conectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT;

try {
    conectDB();

        app.listen((process.env.PORT), () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.log(`Erro ao iniciar a aplicação: ${error.mensagem}`)
}

/*

app.get(("/agendamentos"), async (req, res) => {
    try {
        const todosAgendamentos = await Agendamento.find();

        res.status(200)({mensagem: "Todos os agendamentos foram listados com sucesso", Agendamento: todosAgendamentos});
    } catch (error) {

        res.status(400)({mensagem: `Erro ao listar agendamentos: ${error.message}`});
    }
});

app.get(("/agendamentos/buscar"), async (req, res) => {
   try {
    const nome = req.query.nome;
    //regex busca por partes do texto
    //options ognora maiuscula ou minuscula
    const agendamentos = await Agendamento.find({ nomePet: {$regex: nome, $option: "i"} });
    res.status(200).json({mensagem: "Agendamento encontrado com sucesso", agendamento: agendamentos});
   } catch (error) {
    res.status(400).json({mensagem: `Erro ao buscar agendamento: ${error.message}`});
   } 
});

app.patch(("/agendamentos/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const agendamentoAtualizado = await Agendamento.findByIdAndDelete(id, { status: status }, {runValidators: true, new: true});

        if (!agendamentoAtualizado) {
            return res.status(404).json({mensagem: "Agendamento não encontrado"});
        } else {
            return res.status(200).json({mensagem: "Agendamento atualizado com sucesso", agendamento: agendamentoAtualizado});
        }
    } catch (error) {
         res.status(500).json({mensagem: `Erro ao atualizar agendamento: ${error.message}`});
    }
})

app.delete(("/agendamentos/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const agendamentoDeletado = Agendamento.findByIdAndDelete(id);
        
        if (!agendamentoDeletado) {
            return res.status(404).json({mensagem: "Agendamento não encontrado"});
        }else {
            return res.status(200).json({mensagem: "Agendamento deletado com sucesso", agendamento: agendamentoDeletado});
        }
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao deletar agendamento: ${error.message}`});
    }
});

*/


