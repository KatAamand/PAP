const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.get('/', invoiceController.getInvoicePage);
router.post('/generate', invoiceController.generateInvoice);
router.get('/preview', invoiceController.previewInvoice);
router.get('/approve', invoiceController.approveInvoice)

router.get('/products', (req, res) => {
    res.render('products', { products });
});


module.exports = router;
