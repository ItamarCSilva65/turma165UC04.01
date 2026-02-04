import { UsuarioController } from "../controllers/UsuarioControllers.js";
import express from "express";

const router = express.Router();

router.get("/", UsuarioController.listarUsuarios);

router.post("/", UsuarioController.criarUsuariio);

router.post("/login", UsuarioController.loginUsuario);

router.get("/:id", UsuarioController.buscarPorId);

router.delete("/:id", UsuarioController.deletarUser);

router.put("/:id", UsuarioController.atualizarUsuario);

router.patch("/:id", UsuarioController.atualizarParcialmente);



export default router;