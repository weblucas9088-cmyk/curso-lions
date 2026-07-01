import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,
        require: [true, "O nome do cliente é obrigadorio!"],
    },

    item: {
        type: String,
        require: [true, "O item é obrigadorio!"],
        enum: {
            values: ["Salgado", "Suco", "Combo", "Bolo"],
            message: "Os items só pode ser Salgado, Suco, Combo ou Bolo",
        },
    },

    quantidade: {
        type: Number,
        require: [true, "A quantidade é obrigadorio"],
    },

    formaPagamento: {
        type: String,
        require: [true, "A forma de pagamento é obrigadorio!"],
        enum: {
            values: ["Dinheiro", "Pix", "Cartão"],
            message: "As formas de pagamento só pode ser Dinheiro, Pix ou Cartão",
        },
    },

    observacao: {
        type: String,
    },

    valorUnitario: {
        type: Number,
    },

    valorTotal: {
        type: Number,
    },

    status: {
        type: String,
        default: "Pendente",
        enum: {
            values: ["Pendente", "Pago", "Entregue"],
            message: "O status só pode ser Pendente, Pago ou Entregue",
        },
    },
});

const pedido = mongoose.model("Pedidos", pedidoSchema);

export default pedido;