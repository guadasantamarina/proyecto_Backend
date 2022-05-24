import mongoose from 'mongoose';
import { cartCollectionName } from './carts';

export const productsCollectionName = 'product';

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { 
    versionKey: false 
  }
);

export const ProductsModel = mongoose.model(
  productsCollectionName,
  productsSchema
);