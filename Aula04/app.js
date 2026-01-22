import express from "express";
import agendaRoutes from "./src/routes/agenda/AgendaRoutes.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/agenda", agendaRoutes);
// Sua lógica e endpoints aqui
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
