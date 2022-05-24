import { Router } from 'express';
import productsRouter from './products';
import cartsRouter from './carts';

const router = Router();

router.use('/products', productsRouter);
router.use('/carts', cartsRouter);

export default router;