import {agenda} from '../../data/data.js';
export class AgendaModel {
    static listarTodos() {
        return agenda;
    }

    static buscarPorId(id) {
        return agenda.find(a => a.id === parseInt(id));
    }

    static criarContato({ nome, telefone, email }) {
        const novoContato = {
            id: agenda.length + 1,
            nome: nome,
            telefone: telefone,
            email: email
        };
        agenda.push(novoContato);
        return novoContato;
    }

    static atualizarContato(id, { nome, telefone, email }) {
        const index = agenda.findIndex(a => a.id === parseInt(id));
        agenda[index] = {
            id: parseInt(id),
            nome: nome,
            telefone: telefone,
            email: email
        };
        return agenda[index];
    }
    static deletarContato(id) {
        const index = agenda.findIndex(a => a.id === parseInt(id));
        if (index === -1) {
            return false;
        }
        agenda.splice(index, 1);
        return true;
    }
}







