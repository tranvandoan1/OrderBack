import express from 'express';
import { create, list, update, Id, read, remove } from '../controllers/Table';
const router = express.Router();

router.post('/table', create);
router.get('/table', list);
router.get('/table/:id', read);

router.put('/table/:id', update);

router.delete('/table/:id', remove);

router.param('id', Id);

module.exports = router;