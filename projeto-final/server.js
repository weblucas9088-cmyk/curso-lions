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
