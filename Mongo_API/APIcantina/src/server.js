import express from "express";
import dotenv from "dotenv";
import conectDB from "./db.js";
import pedido from "./models/pedido.js";

dotenv.config({path: "../.env"});
const app = express();
const PORT = process.env.PORT || 3000
conectDB();

app.use(express.json());

app.get(("/"), (req, res) => {
    res.json ({mensagem: "Servidor rodando"});
});

app.post(("/pedidos"), async (req, res) => {
    try {
        const {nomeCliente, item, quantidade, formaPagamento, observacao} = req.body

        if (item) {
            switch (item) {
                case "Salgado":
                    valorUnitario = 8;
                    break;
                case "Suco":
                    valorUnitario = 6;
                    break;
                case "Combo":
                    valorUnitario = 12;
                    break;
                case "Bolo":
                    valorUnitario = 5;
                    break;

                default:
                    console.log("Serviço inválido")
                    break;
            }
            valorTotal = valorUnitario * quantidade

            if (quantidade >= 5) {
             valorTotal = 0.9 * valorTotal
            }
            
            
        }
    const novoPedido = new pedido ({
        nomeCliente,
        item,
        quantidade,
        formaPagamento,
        observacao,
        valorUnitario,
        valorTotal,
    });

    await novoPedido.save();

    res.status(201).json({message: "pedido cliente feito com sucesso!", pedido: novoPedido})

    } catch (error) {
        res.status(400).json({message: `Erro no pedido do cliente: ${error.message}`})
    }
});

app.get(("/pedidos"), async (req, res) => {
    try {
        const TodosPedidos = await pedido.find();

        res.status(200).json({message: "Todos pedidos listado com sucesso!", pedido: TodosPedidos})
    } catch (error) {
        res.status(400)({mensagem: `Erro ao listar os pedidos: ${error.message}`});
    }
});

app.get(("/pedidos/buscar"), async (req, res) => {
    try {
        const nome = req.query.params;

        const pedidos = await pedido.find({ nomeCliente: {$regex: nome , $option: "i"} });
        res.status(200).json({mensagem: "Cliente encontrado com sucesso", pedido: pedidos});
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao listar clientes: ${error.message}`});
   } 
});

app.patch(("pedidos/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const { Pago } = req.body;
        const clientesAtualizados = await pedido.findByIdAndDelete(id, { status: Pago }, {runValidators: true, new: true});

        if (!clientesAtualizados) {
            return res.status(404).json({mensagem: "Cliente não encontrada"});
        } else {
            return res.status(200).json({mensagem: "Cliente atualizado com sucesso", pedido: clientesAtualizados });
        }
    } catch (error) {
         res.status(500).json({mensagem: `Erro ao atualizar cliente: ${error.message}`});
    }
});

app.delete(("/pedidos/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const clienteDeletados = pedido.findByIdAndDelete(id);
        
        if (!clienteDeletados) {
            return res.status(404).json({mensagem: "Cliente não encontrado"});
        }else {
            return res.status(200).json({mensagem: "Cliente deletado com sucesso", pedido: clienteDeletados});
        }
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao deletar cliente: ${error.message}`});
    }
})

app.listen((process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});