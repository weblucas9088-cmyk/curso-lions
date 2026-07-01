import mongoose from "mongoose";
import dotenv from "dotenv";

async function conectDB() {

    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Banco de dados esta conectado");
    } catch (error) {
            console.log(`WASTED ${error.message}`);
    }
}

export default conectDB;