// config/mongodb_connect.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/products", { });

const productSchema = new mongoose.Schema({
  productname: String,
  productbrand: String,
  productmodel: String,
  productquantity: Number,
  productdescription: String,
  productprice: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
