import express from 'express';
import "dotenv/config";
import cursoRoutes from './src/Routes/Curso/cursoRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', cursoRoutes);

app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});    