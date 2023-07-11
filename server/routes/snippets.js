import express from 'express';
import { createSnippet, deleteSnippet, editSnippet, getSnippets, shareSnippet} from '../controllers/snippetController.js';

const router = express.Router();

router.get('/', getSnippets)
router.post('/', createSnippet);
router.patch('/:id', editSnippet);
router.delete('/:id', deleteSnippet);
router.get('/:id/share', shareSnippet);

export default router;