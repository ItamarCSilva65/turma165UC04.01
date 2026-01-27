import { CursoModel } from "../../models/curso/CursoModel";

export class CursoController {
    static listarCursos(req, res) {
        const cursos = CursoModel.listarCursos();
        res.status(200).json(cursos);
    }}

    static buscarCursoPorId(req, res) {
        const { id } = req.params;
        const curso = CursoModel.buscarCursoPorId(id);
        if (!curso) {
            return res.status(400).json({ message: "Curso não encontrado" });
        }}
        
        static buscarCursoPorId(req, res) {
            try {
                const { id } = req.params;
                if (!id){
                    {
