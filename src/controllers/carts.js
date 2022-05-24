import { CartsModel } from '../models/carts';


export const getCartById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const item = await CartsModel.findById(id);
  
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

export const createCart = async (req, res) => {
    try {
      const timestamps = req.body;
  
      const newCart = await CartsModel.create({
        timestamps
      });
  
      res.json({
        data: newCart,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    }
};

export const productsInCart = async (req, res) => {
    try {
        
    }
}

