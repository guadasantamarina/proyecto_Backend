"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsCollectionName = exports.ProductsModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _carts = require("./carts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productsCollectionName = 'product';
exports.productsCollectionName = productsCollectionName;
var productsSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  cartId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _carts.cartCollectionName,
    required: true
  }
});

var ProductsModel = _mongoose["default"].model(productsCollectionName, productsSchema);

exports.ProductsModel = ProductsModel;