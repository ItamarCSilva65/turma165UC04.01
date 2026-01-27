import { CursoController } from "../../../controllers/Curso/CursoController.js";
import express from "express";

const router = express.Router();

router.get("/cursos", CursoController.listarCursos);

export default router;

