const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.get('/', invoiceController.getInvoicePage);


router.get('/products', (req, res) => {
    res.render('products', { products });
});


module.exports = router;
