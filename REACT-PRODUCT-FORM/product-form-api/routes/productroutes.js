// routes/productroutes.js
const express = require('express');
const productscontroller = require('../controllers/productscontroller');
const router = express.Router();

router.get('/list', productscontroller.getAllProducts);
router.get('/singleproduct/:id', productscontroller.getSingleProduct);
router.post('/add', productscontroller.addProduct);
router.delete('/delete/:id', productscontroller.deleteProduct);
router.put('/update/:id', productscontroller.updateProduct);

module.exports = router;
