import mongoose from 'mongoose';
import { productsCollectionName } from './products';


export const cartsCollectionName = 'cart';

const cartSchema = new mongoose.Schema(
  { productId: 
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: productsCollectionName,
    required: true,
    }
  },
  {versionKey: false } 
);

export const CategoryModel = mongoose.model(
    cartsCollectionName,
    cartSchema
);