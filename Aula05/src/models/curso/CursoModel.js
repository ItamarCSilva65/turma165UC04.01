import { cursos } from "../../data/cursos.data.js";
import {alunos} from "../../data/alunos.data.js";

export class CursoModel {
    static listarCursos() {
        return cursos;
    }
    static buscarCursoPorId(id) {
        return cursos.find(curso => curso.id === parseInt(id));
    }

    static criarCurso(nome) {
        const novoCurso = {
            id: cursos.length + 1,
            nome: nome
        };
        cursos.push(novoCurso);
        return novoCurso;
    }
    static atualizarCurso(Id, nome) {
        const index = cursos.findIndex(curso => curso.id === parseInt(Id));
        if (index !== -1) {
            return false;
        }
        cursos[index] = {
            id : Id,
            nome : nome
        };
        return cursos[index];
    }

    static deletarCurso(id) {
        const index = cursos.findIndex(curso => curso.id === parseInt(id));
        if (index === -1) {
            return false;
        }
        cursos.splice(index, 1);
        return true;
    }

    static listarAlunosPorCurso(cursoId) {
        





