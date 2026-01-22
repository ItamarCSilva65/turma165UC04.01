import express from 'express';
import { AgendaController } from '../../controllers/agenda/AgendaController.js';

const router = express.Router();

// Rota para listar todos os contatos
router.get('/', AgendaController.listarContatos);

// Rota para buscar contato por ID
router.get('/:id', AgendaController.buscarPorId);

// Rota para criar um novo contato
router.post('/', AgendaController.criarContato);

// Rota para atualizar um contato existente
router.put('/:id', AgendaController.atualizarContato);

// Rota para deletar um contato
router.delete('/:id', AgendaController.deletarContato);

export default router;