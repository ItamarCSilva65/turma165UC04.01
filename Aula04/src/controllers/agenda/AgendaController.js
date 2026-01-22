import { AgendaModel } from "../../models/agenda/AgendaModel.js";
export class AgendaController {
    static listarContatos(req, res) {
        try {
            const contatos = AgendaModel.listarTodos();
            if (contatos.length === 0 || !contatos) {
                res.status(400).json({ msg: "Nenhum contato no banco." });
                return
            }
            res.status(200).json({ msg: "Contatos Encontrados", contatos });
        }
        catch (error) {
            res.status(500).json({ msg: "Erro no servidor", error: error.message });
        }
    }
    static buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const contato = AgendaModel.buscarPorId(id);
            if (!contato) {
                res.status(404).json({ msg: "Contato não encontrado." });
                return
            }

            res.status(200).json({ msg: "Contato encontrado", contato });
        }
        catch (error) {
            res.status(500).json({ msg: "Erro no servidor", error: error.message });
        }
    }
    static criarContato(req, res) {
        try {
            const { nome, telefone, email } = req.body;
            if (!nome || !telefone || !email) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos no cadastro." });
                return;
            }
            const novoContato = AgendaModel.criarContato({ nome, telefone, email });
            if (novoContato) {
                res.status(201).json({ msg: "Contato criado com sucesso!" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao cadastrar contato.", error: error.message })
        };
    }
    static atualizarContato(req, res) {
        try {
            const { id } = req.params;
            const { nome, telefone, email } = req.body;
            if (!nome || !telefone || !email) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos na atualização." });
                return;
            }

            const contatoAtualizado = AgendaModel.atualizarContato(id, { nome, telefone, email });
            if (contatoAtualizado) {
                res.status(200).json({ msg: "Contato atualizado com sucesso!", contatoAtualizado });
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao atualizar contato.", error: error.message })
        };
    }
    static deletarContato(req, res) {
        try {
            const { id } = req.params;
            const contatoDeletado = AgendaModel.deletarContato(id);
            if (!contatoDeletado) {
                res.status(404).json({ msg: "Contato não encontrado para deletar." });
                return;
            }
            res.status(200).json({ msg: "Contato deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao deletar contato.", error: error.message })
        };
    }
}
    

