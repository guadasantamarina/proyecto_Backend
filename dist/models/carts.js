"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartsCollectionName = exports.CategoryModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartsCollectionName = 'cart';
exports.cartsCollectionName = cartsCollectionName;
var cartSchema = new _mongoose["default"].Schema({
  timestamps: true,
  versionKey: false
});

var CategoryModel = _mongoose["default"].model(cartsCollectionName, cartSchema);

exports.CategoryModel = CategoryModel;