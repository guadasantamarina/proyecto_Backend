import { Router } from 'express';

const router = Router();

import {
  getCartById,
  createCart,
} from '../controllers/carts';


router.get('/:id', getCartById);

router.post('/', createCart);


export default router;