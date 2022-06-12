import express from 'express';
import { create, list, update, saveorderId, read, remove } from '../controllers/SaveOrder';
const router = express.Router();

router.post('/saveorder', create);
router.get('/saveorder', list);
router.get('/saveorder/:id', read);

router.put('/saveorder/:id', update);

router.delete('/saveorder/:id', remove);

router.param('id', saveorderId);

module.exports = router;