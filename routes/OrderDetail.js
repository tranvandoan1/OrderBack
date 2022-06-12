import express from 'express';
import { create, list, Id, read, remove } from '../controllers/OrderDetail';
const router = express.Router();

router.post('/orderdetail', create);

router.get('/orderdetail', list);
router.get('/orderdetail/:id', read);

// router.put('/orderdetail/:id', update);

router.delete('/orderdetail/:id', remove);

router.param('id', Id);


module.exports = router;