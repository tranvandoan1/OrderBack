import express from 'express';
import { create, list, Id, read, remove } from '../controllers/OrderDetail';
import { isAuthenticateUser } from './CheckAuth';
const router = express.Router();

router.post('/orderdetail',isAuthenticateUser, create);

router.get('/orderdetail',isAuthenticateUser, list);
router.get('/orderdetail/:id',isAuthenticateUser, read);

// router.put('/orderdetail/:id', update);

router.delete('/orderdetail/:id',isAuthenticateUser, remove);

router.param('id',isAuthenticateUser, Id);


module.exports = router;