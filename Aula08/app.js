import express from "express";
import "dotenv/config";
import usuarioRoutes from "./src/routes/usuarioRoutes.js"
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/usuarios", usuarioRoutes)

app.get("/", (req, res)=>{
    res.status(200).json({msg: "Api Rodandooo"});
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
});