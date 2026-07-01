import express from "express";
import AgendamentoRoutes from "./src/routes/agendamento.routes.js"

const app = express();

app.use(express.json());

app.get(("/"), (req, res) => {
    res.json ({mensagem: "Servidor rodando"});
});

app.use(AgendamentoRoutes);

export default app;
