import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

async function conectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Banco de dados esta conectado");
    } catch (error) {
        console.log(`WASTED ${error.message}`);
    }
}

export default conectDB;