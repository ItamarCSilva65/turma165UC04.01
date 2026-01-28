import { CursoController } from "../../../controllers/Curso/CursoController.js";
import express from "express";

const router = express.Router();

router.get("/cursos", CursoController.listarCursos);

router.get("/:id", CursoController.buscarCursoPorId);

router.post("/", CursoController.criarCurso);

router.put("/", CursoController.atualizarCurso);

router.get("/alunos/:idCurso", CursoController.buscarAlunosPorCurso);

router.delete("/:id", CursoController.deletarCurso);

export default router;

