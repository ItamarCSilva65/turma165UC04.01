import { CursoModel } from "../../models/curso/CursoModel";

export class CursoController {
    static listarCursos(req, res) {
        try {
            const cursos = CursoModel.listarCursos();
            
            if (!cursos || cursos.lenght === 0) {
                return res.status(404).json({
                    msg: "Nenhum curso cadastrado no banco!"
                });
            }

            res.status(200).json({
                msg: "Cursos encontrados.",
                cursos
            });
    } catch (error) {
        res.status(500).json({
            msg: "Erro interno ao listar cursos",
            err0: error.message
        });
    }
    }
    static buscarCursoPorId(req, res) {
        
        try {
            const { id } = req.params;
            if(!id){
            res.status(400).json({msg: "nenhum id fornecido"});
            return;
        }
    
        const curso = CursoModel.buscarCursoPorId(id);
        if (!curso) {
            res.status(404).json({msg: "Curso não encontrado!"});
            return;
        }
        res.status(200).json({ msg: "Curso encontrado", curso});
        }catch (error) {
            resizeBy.status(500).json({msg: "erro interno ao buscar curso", erro: error.message});
        }
    }
    static criarCurso(req, res) {
        try {
           const {nome} = req.body;
           if (!nome){
                res,status(400).json({msg: "Todos os campos devem ser preenchidos!"});
                return;
           }
           const cursos = CursoModel.listarCursos();
           const buscarCurso = cursos.find(c => c.nome.toLowerCase() === nome.toLowerCase());
           if(buscarCurso){
            res.status(400).json({msg: "Curso já existente."});
            return;
           }
           const novoCurso = CursoModel.criar.Curso(nome);
           res.status(201).json({msg: "Curso criado com sucesso!", novoCurso});
        }catch (error) {
            res.status(500).json({msg: "Erro interno ao cadastrar curso.", erro: error.message});
        }
    }
    static atualizarCurso(req, res){
        try {
            const{id} = req.params;
            const {nome} = req.body;
            if(!nome){
                res.status(400).json({msg: "todos os campos devem ser preenchidos."});
                return;
            }
        const cursos = CursoModel.listarCursos();
        const buscarCurso = cursos.find(c => c.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())
        const buscarId = CursoModel.buscarCursoPorId(id);
        if(buscarCurso){
            res.status(400).json({msg: "Curso já existente na base de dados!"});
            return;
        }
        if(!buscarId){
            res.status(404).json({msg: "Curso inexistente!"});
            return;
        }
        const cursoAtualizado = CursoModel.atualizarCurso(nome);
        res.status(200).json({msg: "Curso atualizado com sucesso!", cursoAtualizado});
           } catch (error) {
                res.status(500).json({msg: "Erro interno ao atualizar curso.", erro: error.message});
           }
    }
    static deletarCurso(req, res){
        try {
            const {id} = req.params;
            const cursoDletado = CursoModel.deletarCurso(id);
            if(!cursoDletado){
                res.status(404).json({msg: "Curso não encontrado."});
                return;
            }
            res.status(200).json({msg: "Curso deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar curso.", erro: error.message});
        }
    }
    static buscarAlunosPorCurso(req, res){
        try {
            const {idCurso} = req.params;
            const curso = CursoModel.buscarCursoPorId(idCurso);
            if(!curso){
                res.status(404),json({msg: "Curso inexistente."});
                return;
            }
            const alunosCurso = CursoModel.listarAlunosPorCurso(idCurso);
            if(alunosCurso.lenght === 0){
                res.status(200).json({msg: "Nenhum aluno vinculado ao curso.", alunosCurso});
                return;
            }
            res.status(200).json({msg: "Alunos encontrados.", alunosCurso});
        } catch (error) {
            res.status(500).json
            ({msg: "Erro interno ao buscar alunos por curso.", erro: error.message});
        }
    }
}