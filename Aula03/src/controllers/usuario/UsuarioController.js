import { UsuarioModel } from "../../models/usuario/UsuarioModels.js";

export class UsuarioController {

    static listarUsuarios(req, res) {
        try {
            const usuarios = UsuarioModel.listarTodos();
            if (usuarios.length === 0 || !usuarios) {
                res.status(400).json({ msg: "Nenhum usuário no banco." });
                return
            }
            res.status(200).json({ msg: "Usuarios Encontrados", usuarios });
        }

        catch (error) {
            res.status(500).json({ msg: "Erro no servidor", error: error.message });
        }
    }
    static buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = UsuarioModel.buscarPorId(id);
            if (!usuario) {
                res.status(404).json({ msg: "Usuário não encontrado." });
                return
            }
            res.status(200).json({ msg: "Usuário encontrado", usuario });
        }
        catch (error) {
            res.status(500).json({ msg: "Erro no servidor", error: error.message });
        }
    }

    static criarUsuario(req, res) {
        try {

            const { nome, email, telefone } = req.body;
            if (!nome || !email || !telefone) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos no cadastro." });
                return;
            }
            const novoUsuario = UsuarioModel.criarUsuario({ nome, email, telefone });
            if (novoUsuario) {
                res.status(201).json({ msg: "Usuário criado com sucesso!" });

            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao cadastrar usuário.", error: error.message })
        };

    }

    static atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, telefone } = req.body;
            if (!nome || !email || !telefone) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos na atualização." });
                return;
            }
            if(!id){
                res.status(400).json({ msg: "ID do usuário é obrigatório para atualização." });
                return;
            }
            const usuarioAtualizado = UsuarioModel.atualizarUsuario(id, nome, email, telefone);
            res.status(200).json({ msg: "Usuário atualizado com sucesso!", usuarioAtualizado });

        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao atualizar usuário.", error: error.message })
        };
                   
    }

    static deletarUsuario(req, res) {
        try {

            const { id } = req.params;
            if(!id){
                res.status(400).json({ msg: "ID do usuário é obrigatório para exclusão." });
                return;
            }
            const usuarioDeletado = UsuarioModel.deletarUsuario(id);
            if (!usuarioDeletado) {
                res.status(404).json({ msg: "Usuário não encontrado para exclusão." });
                return;
            }
            res.status(200).json({ msg: "Usuário deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao deletar usuário.", error: error.message })
        };
    }
    static buscarPorEmail(req, res) {
        try {
            const { email } = req.params;
            const usuario = UsuarioModel.buscarPorEmail(email);
            if (!usuario) {
                res.status(404).json({ msg: "Usuário não encontrado." });
                return
            }
            res.status(200).json({ msg: "Usuário encontrado", usuario });
        }
        catch (error) {
            res.status(500).json({ msg: "Erro interno ao buscar usuário por email. ", error: error.message });
        }
    }
    


        
}
