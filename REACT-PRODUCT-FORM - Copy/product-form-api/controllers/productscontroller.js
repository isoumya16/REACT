const Product = require('../config/mongodb_connect');
const multer = require('multer');

// List all products
exports.getAllProducts = async (req, res) => {
  try {
    let result = await Product.find();
    res.send(JSON.stringify({'error': '', 'message': result}));
  } catch (error) {
    res.send(JSON.stringify({'error': error.message, 'message': ''}));
  }
};

// Get a single product by ID
exports.getSingleProduct = async (req, res) => {
  try {
    let result = await Product.findById(req.params.id);
    res.send(JSON.stringify({'error': '', 'message': result}));
  } catch (error) {
    res.send(JSON.stringify({'error': error.message, 'message': ''}));
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    let productData = {
      productname: req.body.productname,
      productbrand: req.body.productbrand,
      productmodel: req.body.productmodel,
      productquantity: req.body.productquantity,
      productdescription: req.body.productdescription,
      productprice: req.body.productprice
    };
    const product = new Product(productData);
    await product.save();
    res.send(JSON.stringify({'error': '', 'message': 'Product added successfully'}));
  } catch (error) {
    res.send(JSON.stringify({'error': error.message, 'message': ''}));
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send(JSON.stringify({'error': '', 'message': 'Product deleted successfully'}));
  } catch (error) {
    res.send(JSON.stringify({'error': error.message, 'message': ''}));
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    let productData = {
      productname: req.body.productname,
      productbrand: req.body.productbrand,
      productmodel: req.body.productmodel,
      productquantity: req.body.productquantity,
      productdescription: req.body.productdescription,
      productprice: req.body.productprice
    };
    await Product.findByIdAndUpdate(req.params.id, productData);
    res.send(JSON.stringify({'error': '', 'message': 'Product updated successfully'}));
  } catch (error) {
    res.send(JSON.stringify({'error': error.message, 'message': ''}));
  }
};

// Multer setup for file uploads (if needed)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

exports.uploadImage = multer({ storage: storage }).single('image');
