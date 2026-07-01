import express from "express";
import dotenv from "dotenv";
import conectDB from "./db.js";
import avaliacao from "./models/avaliacao.js";
import imovel from "./models/imovel.js";
import reserva from "./models/reserva.js";

dotenv.config({path: "../.env"});
const app = express();
const PORT = process.env.PORT || 3000
conectDB();

app.use(express.json());

app.get(("/"), (req, res) => {
    res.json ({mensagem: "Servidor rodando"});
});

app.post(("/imoveis"), async (req, res) => {
    try {
        const {imovel} = req.params

        res.status(201).json({message: "imovel criado com sucesso!", imovel});
            return;
    } catch (error) {
        res.status(400).json({message: "imovel não foi criado com sucesso!", imovel})
    }
});

