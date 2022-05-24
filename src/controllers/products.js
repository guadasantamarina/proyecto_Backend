import { ProductsModel } from '../models/products';
import { CartsModel } from '../models/carts';

export const checkBodyProduct = async (req, res, next) => {
  const { name, description, stock, price } = req.body;

  if (!name || !description || !stock || !price)
    return res.status(400).json({
      msg: 'missing Body fields',
    })

  next();
};

export const getAllProducts = async (req, res) => {
  try {
   
    const items = await ProductsModel.find();

    res.json({
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await ProductsModel.findById(id);

    if (!item)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, stock, price} = req.body;

    const newProduct = await ProductsModel.create({
      name,
      description,
      stock,
      price,
    });

    res.json({
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, stock, price } = req.body;

    let item = await ProductsModel.findById(id);

    if (!item)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    const productUpdated = await ProductsModel.findByIdAndUpdate(
      id,
      { name, description, stock, price},
      { new: true }
    );

    res.json({
      msg: 'Product updated',
      data: productUpdated,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await ProductsModel.findByIdAndDelete(id);

    res.json({
      msg: 'product deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};