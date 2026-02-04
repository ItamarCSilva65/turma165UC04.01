import { UsuarioController } from "../controllers/UsuarioControllers.js";
import express from "express";

const router = express.Router();

//Rotas públicas

router.post("/", UsuarioController.criarUsuario);
router.post("/login", UsuarioController.loginUsuario);


//Rotas privadas

router.get("/", autenticarToken, UsuarioController.listarUsuarios);

router.get("/:id", autenticarToken, UsuarioController.buscarPorId);

router.delete("/:id", autenticarToken, UsuarioController.deletarUser);

router.put("/:id", autenticarToken, UsuarioController.atualizarUsuario);

router.patch("/:id", autenticarToken, UsuarioController.atualizarParcialmente);



export default router;