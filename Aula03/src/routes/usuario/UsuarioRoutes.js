import express from "express";
import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

const router = express.Router();

// Rota para listar todos os usuarios
router.get("/", UsuarioController.listarUsuarios);

// Rota para buscar usuario por ID
router.get("/:id", UsuarioController.buscarPorId);

// Rota para criar um novo usuario
router.post("/", UsuarioController.criarUsuario);

// Rota para atualizar um usuario existente
router.put("/:id", UsuarioController.atualizarUsuario);

// Rota para deletar um usuario
router.delete("/:id", UsuarioController.deletarUsuario);

// Rota para buscar usuario por email
router.get("/email/:email", UsuarioController.buscarPorEmail);

export default router;

